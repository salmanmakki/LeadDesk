import { useState, useEffect, useCallback, useRef } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import StatsCards from '../../components/admin/StatsCards';
import SearchBar from '../../components/admin/SearchBar';
import FilterDropdown from '../../components/admin/FilterDropdown';
import LeadTable from '../../components/admin/LeadTable';
import Pagination from '../../components/admin/Pagination';
import ViewMessageModal from '../../components/admin/ViewMessageModal';
import * as leadService from '../../services/leadService';

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState(null);
  const [pagination, setPagination] = useState({ page: 1, pages: 1, total: 0 });
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [viewMessage, setViewMessage] = useState(null);
  const oldStatusMap = useRef({});

  const fetchData = useCallback(async (page = 1) => {
    setLoading(true);
    try {
      const [leadsData, statsData] = await Promise.all([
        leadService.getLeads({ search, status: statusFilter, page, limit: 10 }),
        leadService.getLeadStats(),
      ]);
      setLeads(leadsData.leads);
      setPagination(leadsData.pagination);
      setStats(statsData);
      leadsData.leads.forEach((l) => { oldStatusMap.current[l._id] = l.status; });
    } catch {
      // interceptor handles redirect on 401
    } finally {
      setLoading(false);
    }
  }, [search, statusFilter]);

  useEffect(() => {
    fetchData(1);
  }, [fetchData]);

  const handleSearchChange = (val) => { setSearch(val); };
  const handleStatusFilterChange = (val) => { setStatusFilter(val); };
  const handlePageChange = (page) => { fetchData(page); };

  const handleStatusUpdated = (leadId, newStatus) => {
    const oldStatus = oldStatusMap.current[leadId];
    setLeads((prev) =>
      prev.map((l) => (l._id === leadId ? { ...l, status: newStatus } : l))
    );
    oldStatusMap.current[leadId] = newStatus;
    if (stats && oldStatus && oldStatus !== newStatus) {
      setStats((prev) => {
        const next = { ...prev };
        const oldKey = oldStatus.toLowerCase();
        const newKey = newStatus.toLowerCase();
        next[oldKey] = Math.max(0, (next[oldKey] || 1) - 1);
        next[newKey] = (next[newKey] || 0) + 1;
        return next;
      });
    }
  };

  return (
    <AdminLayout>
      <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.05s' }}>
        <StatsCards stats={stats} />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <SearchBar value={search} onChange={handleSearchChange} />
        <FilterDropdown value={statusFilter} onChange={handleStatusFilterChange} />
      </div>

      <div className="animate-slide-up" style={{ animationDelay: '0.15s' }}>
        <LeadTable
          leads={leads}
          loading={loading}
          onStatusUpdated={handleStatusUpdated}
          onViewMessage={setViewMessage}
          hasFilters={!!(search || statusFilter)}
        />
      </div>

      <Pagination
        page={pagination.page}
        pages={pagination.pages}
        total={pagination.total}
        onPageChange={handlePageChange}
      />

      {viewMessage && (
        <ViewMessageModal message={viewMessage} onClose={() => setViewMessage(null)} />
      )}
    </AdminLayout>
  );
}
