import { motion } from 'motion/react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, DollarSign, Home, TrendingUp } from 'lucide-react';

const occupancyData = [
  { id: 'occ-jan', month: 'Jan', rate: 65 },
  { id: 'occ-feb', month: 'Feb', rate: 72 },
  { id: 'occ-mar', month: 'Mar', rate: 85 },
  { id: 'occ-apr', month: 'Apr', rate: 78 },
  { id: 'occ-may', month: 'May', rate: 88 },
  { id: 'occ-jun', month: 'Jun', rate: 92 },
];

const revenueData = [
  { id: 'rev-jan', month: 'Jan', revenue: 45000 },
  { id: 'rev-feb', month: 'Feb', revenue: 52000 },
  { id: 'rev-mar', month: 'Mar', revenue: 68000 },
  { id: 'rev-apr', month: 'Apr', revenue: 61000 },
  { id: 'rev-may', month: 'May', revenue: 74000 },
  { id: 'rev-jun', month: 'Jun', revenue: 82000 },
];

const stats = [
  { icon: Users, label: 'Total Guests', value: '2,847', change: '+12.5%', color: 'from-primary to-primary/70' },
  { icon: DollarSign, label: 'Revenue', value: 'TZS 82M', change: '+18.2%', color: 'from-secondary to-secondary/70' },
  { icon: Home, label: 'Occupancy Rate', value: '92%', change: '+5.3%', color: 'from-chart-3 to-chart-3/70' },
  { icon: TrendingUp, label: 'Bookings', value: '456', change: '+23.1%', color: 'from-chart-4 to-chart-4/70' },
];

export function DashboardPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const slideFromBehindVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      z: -500,
      rotateX: 45,
    },
    visible: {
      opacity: 1,
      scale: 1,
      z: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-20 bg-background dark:bg-background overflow-hidden" style={{ perspective: "2000px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              Dashboard
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Dashboard at Your Fingertips
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Monitor your property performance with real-time insights and comprehensive analytics
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ transformStyle: "preserve-3d" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={`stat-${stat.label}-${index}`}
              variants={slideFromBehindVariants}
              whileHover={{
                scale: 1.05,
                z: 50,
                transition: { duration: 0.3 },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-xs text-primary">{stat.change} from last month</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ transformStyle: "preserve-3d" }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Occupancy Rate Chart */}
          <motion.div
            variants={slideFromBehindVariants}
            whileHover={{
              scale: 1.02,
              z: 30,
              transition: { duration: 0.3 },
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="p-6 rounded-xl border border-border bg-card"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Occupancy Rate (%)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={occupancyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0.5rem',
                  }}
                />
                <Line type="monotone" dataKey="rate" stroke="var(--color-primary)" strokeWidth={3} dot={{ fill: 'var(--color-primary)' }} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Revenue Chart */}
          <motion.div
            variants={slideFromBehindVariants}
            whileHover={{
              scale: 1.02,
              z: 30,
              transition: { duration: 0.3 },
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="p-6 rounded-xl border border-border bg-card"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Monthly Revenue (TZS)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0.5rem',
                  }}
                />
                <Bar dataKey="revenue" fill="var(--color-secondary)" radius={[8, 8, 0, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>

        {/* Recent Bookings Table Preview */}
        <motion.div
          variants={slideFromBehindVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            scale: 1.01,
            z: 30,
            transition: { duration: 0.3 },
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="mt-8 p-6 rounded-xl border border-border bg-card overflow-hidden"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Bookings</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Guest Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Room</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Check-in</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr key="booking-1" className="border-b border-border hover:bg-accent/50 transition-colors">
                  <td className="py-3 px-4 text-foreground">John Mwangi</td>
                  <td className="py-3 px-4 text-muted-foreground">Deluxe Suite 102</td>
                  <td className="py-3 px-4 text-muted-foreground">Today, 2:00 PM</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">Confirmed</span></td>
                </tr>
                <tr key="booking-2" className="border-b border-border hover:bg-accent/50 transition-colors">
                  <td className="py-3 px-4 text-foreground">Sarah Kamau</td>
                  <td className="py-3 px-4 text-muted-foreground">Standard Room 205</td>
                  <td className="py-3 px-4 text-muted-foreground">Tomorrow, 10:00 AM</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 rounded-full bg-secondary/10 text-secondary text-xs">Pending</span></td>
                </tr>
                <tr key="booking-3" className="hover:bg-accent/50 transition-colors">
                  <td className="py-3 px-4 text-foreground">David Ochieng</td>
                  <td className="py-3 px-4 text-muted-foreground">Family Room 108</td>
                  <td className="py-3 px-4 text-muted-foreground">May 15, 3:00 PM</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">Confirmed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
