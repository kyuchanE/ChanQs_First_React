export type HealthCheckResult = {
  status: 'ok';
  uptime: number;
  timestamp: string;
};

export const checkHealth = (): HealthCheckResult => ({
  status: 'ok',
  uptime: process.uptime(),
  timestamp: new Date().toISOString(),
});
