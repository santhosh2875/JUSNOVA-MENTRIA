import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth/cookies";
import { supabaseServiceClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  const supabase = supabaseServiceClient();
  const { data, error } = await supabase
    .from("consultations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="rounded-xl border border-red-200 bg-red-50 text-red-800 p-6 shadow-sm max-w-2xl w-full">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold">Failed to load consultations</h3>
                <p className="text-sm mt-1">{error.message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const rows = data || [];

  // --- Totals: Today & This Month ---
  const now = new Date();
  const isSameDay = (d: Date) =>
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate();

  const isSameMonth = (d: Date) =>
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth();

  const totalToday = rows.filter(r => {
    const d = new Date(r.created_at);
    return isSameDay(d);
  }).length;

  const totalThisMonth = rows.filter(r => {
    const d = new Date(r.created_at);
    return isSameMonth(d);
  }).length;

  // Priority counts for additional metrics
  const emergencyCount = rows.filter(r => r.priority?.includes("Emergency")).length;
  const urgentCount = rows.filter(r => r.priority?.includes("Urgent")).length;

  const getPriorityIcon = (priority: string) => {
    if (priority?.includes("Emergency")) {
      return <span className="text-red-500">🚨</span>;
    } else if (priority?.includes("Urgent")) {
      return <span className="text-orange-500">⏰</span>;
    } else if (priority?.includes("Soon")) {
      return <span className="text-yellow-500">📅</span>;
    } else {
      return <span className="text-green-500">🗓️</span>;
    }
  };

  const getPriorityColor = (priority: string) => {
    if (priority?.includes("Emergency")) {
      return "border-l-4 border-red-500 bg-red-50/50";
    } else if (priority?.includes("Urgent")) {
      return "border-l-4 border-orange-500 bg-orange-50/50";
    } else if (priority?.includes("Soon")) {
      return "border-l-4 border-yellow-500 bg-yellow-50/50";
    } else {
      return "border-l-4 border-green-500 bg-green-50/50";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        {/* Enhanced Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center lg:text-left">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-slate-600 text-sm lg:text-base mt-2">
                  Consultation requests overview and management
                </p>
              </div>
            </div>
            <form action="/admin/logout" method="post">
              <Button 
                variant="secondary" 
                type="submit"
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 hover:border-slate-300 transition-all duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Log out
              </Button>
            </form>
          </div>
        </div>

        {/* Enhanced KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100/50 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-blue-700">Total Today</CardTitle>
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-900">{totalToday}</div>
              <p className="text-xs text-blue-600 mt-1">New consultations today</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-purple-100/50 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-purple-700">This Month</CardTitle>
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-900">{totalThisMonth}</div>
              <p className="text-xs text-purple-600 mt-1">Monthly consultations</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-br from-red-50 to-red-100/50 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-red-700">High Priority</CardTitle>
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-900">{emergencyCount + urgentCount}</div>
              <p className="text-xs text-red-600 mt-1">Emergency & urgent cases</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100/50 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-green-700">Total Requests</CardTitle>
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-900">{rows.length}</div>
              <p className="text-xs text-green-600 mt-1">All time consultations</p>
            </CardContent>
          </Card>
        </div>

        <Separator className="bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8" />

        {/* Enhanced Consultation List */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 mb-6">
              <h2 className="text-xl font-semibold text-slate-800">Recent Consultation Requests</h2>
              <div className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                {rows.length} total
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {rows.map((row: any) => (
              <Card key={row.id} className={`shadow-lg border-0 ${getPriorityColor(row.priority)} hover:shadow-xl transition-all duration-300`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {getPriorityIcon(row.priority)}
                      <div>
                        <CardTitle className="text-lg font-semibold text-slate-800">
                          {row.full_name}
                        </CardTitle>
                        <p className="text-sm text-slate-600 flex items-center gap-2 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                          </svg>
                          {row.email}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 bg-white/70 px-3 py-1 rounded-full">
                      {new Date(row.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-slate-600 font-medium">Phone:</span>
                        <span>{row.phone || "Not provided"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-slate-600 font-medium">Support Type:</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {row.support_type || "Not specified"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span className="text-slate-600 font-medium">Mode:</span>
                        <span>{row.preferred_mode || "Not specified"}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-slate-600 font-medium">Preferred Time:</span>
                        <span>{row.preferred_time || "Flexible"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-slate-600 font-medium">Priority:</span>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          row.priority?.includes("Emergency") ? "bg-red-100 text-red-700" :
                          row.priority?.includes("Urgent") ? "bg-orange-100 text-orange-700" :
                          row.priority?.includes("Soon") ? "bg-yellow-100 text-yellow-700" :
                          "bg-green-100 text-green-700"
                        }`}>
                          {row.priority || "Not specified"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs">
                          Created: {new Date(row.created_at).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {row.message && (
                    <div className="mt-4 p-4 bg-white/70 rounded-lg border border-slate-200">
                      <div className="flex items-start gap-2 mb-2">
                        <svg className="w-4 h-4 text-slate-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="text-slate-600 font-medium text-sm">Message:</span>
                      </div>
                      <p className="text-sm text-slate-700 whitespace-pre-wrap pl-6">
                        {row.message}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
            
            {!rows.length && (
              <Card className="shadow-lg border-0 bg-gradient-to-br from-slate-50 to-slate-100">
                <CardContent className="py-16 text-center">
                  <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-slate-600 mb-2">No consultation requests yet</h3>
                  <p className="text-slate-500">Consultation requests will appear here when submitted.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}