import { motion } from "framer-motion";

interface StatsOverviewProps {
  stats: {
    total: number;
    completed: number;
    available: number;
    locked: number;
  };
}

export default function StatsOverview({ stats }: StatsOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <motion.div 
        className="bg-card border border-border rounded-lg p-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
        whileHover={{ y: -5 }}
        data-testid="stats-completed"
      >
        <div className="text-2xl font-bold text-primary mb-2">{stats.completed}</div>
        <div className="text-sm text-muted-foreground">Completed Topics</div>
      </motion.div>
      
      <motion.div 
        className="bg-card border border-border rounded-lg p-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        whileHover={{ y: -5 }}
        data-testid="stats-available"
      >
        <div className="text-2xl font-bold text-accent mb-2">{stats.available}</div>
        <div className="text-sm text-muted-foreground">Available Topics</div>
      </motion.div>
      
      <motion.div 
        className="bg-card border border-border rounded-lg p-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        whileHover={{ y: -5 }}
        data-testid="stats-locked"
      >
        <div className="text-2xl font-bold text-muted-foreground mb-2">{stats.locked}</div>
        <div className="text-sm text-muted-foreground">Locked Topics</div>
      </motion.div>
    </div>
  );
}
