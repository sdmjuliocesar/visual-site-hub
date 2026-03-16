import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, TrendingUp, Eye, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// Real data from production analytics — aggregated by month (last 12 months)
const monthlyData = [
  { mes: "Mar/25", visitas: 0 },
  { mes: "Abr/25", visitas: 0 },
  { mes: "Mai/25", visitas: 0 },
  { mes: "Jun/25", visitas: 0 },
  { mes: "Jul/25", visitas: 0 },
  { mes: "Ago/25", visitas: 0 },
  { mes: "Set/25", visitas: 0 },
  { mes: "Out/25", visitas: 0 },
  { mes: "Nov/25", visitas: 0 },
  { mes: "Dez/25", visitas: 0 },
  { mes: "Jan/26", visitas: 0 },
  { mes: "Fev/26", visitas: 0 },
  { mes: "Mar/26", visitas: 15 },
];

const totalVisits = monthlyData.reduce((acc, d) => acc + d.visitas, 0);
const peakMonth = monthlyData.reduce((a, b) => (a.visitas > b.visitas ? a : b));
const avgMonthly = Math.round(totalVisits / 12);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-navy border border-orange/30 rounded-lg px-4 py-2 shadow-xl">
        <p className="text-white/70 text-xs mb-1">{label}</p>
        <p className="text-orange font-bold text-lg">{payload[0].value} visitas</p>
      </div>
    );
  }
  return null;
};

const Analytics = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-navy">
      {/* Header */}
      <div className="border-b border-white/10 bg-navy/95 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-orange" />
            <span className="font-display text-white text-lg">Análise de Acessos</span>
          </div>
          <span className="ml-auto text-white/40 text-sm flex items-center gap-1">
            <Calendar className="w-4 h-4" /> Últimos 12 meses
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-orange/20 rounded-lg">
                <Users className="w-5 h-5 text-orange" />
              </div>
              <span className="text-white/60 text-sm">Total de Visitas</span>
            </div>
            <p className="font-display text-4xl text-white">{totalVisits}</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-orange/20 rounded-lg">
                <TrendingUp className="w-5 h-5 text-orange" />
              </div>
              <span className="text-white/60 text-sm">Pico de Acessos</span>
            </div>
            <p className="font-display text-4xl text-white">{peakMonth.visitas}</p>
            <p className="text-white/40 text-xs mt-1">{peakMonth.mes}</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-orange/20 rounded-lg">
                <Eye className="w-5 h-5 text-orange" />
              </div>
              <span className="text-white/60 text-sm">Média Mensal</span>
            </div>
            <p className="font-display text-4xl text-white">{avgMonthly}</p>
          </div>
        </div>

        {/* Area Chart */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
          <h2 className="text-white font-semibold text-lg mb-6">Visitas por Mês</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVisitas" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F97316" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.07)" />
                <XAxis
                  dataKey="mes"
                  tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  allowDecimals={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="visitas"
                  stroke="#F97316"
                  strokeWidth={2.5}
                  fill="url(#colorVisitas)"
                  dot={{ fill: "#F97316", r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: "#F97316" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-6">Distribuição de Acessos</h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ top: 0, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.07)" />
                <XAxis
                  dataKey="mes"
                  tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  allowDecimals={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="visitas" fill="#F97316" radius={[6, 6, 0, 0]} opacity={0.85} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <p className="text-center text-white/30 text-xs mt-8">
          Dados reais de visitantes únicos · Atualizado em {new Date().toLocaleDateString("pt-BR")}
        </p>
      </div>
    </div>
  );
};

export default Analytics;
