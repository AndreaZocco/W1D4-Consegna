const trackWebVitals = async (metricHandler) => {
  if (metricHandler && typeof metricHandler === 'function') {
    try {
      const vitals = await import('web-vitals');
      vitals.getCLS(metricHandler);
      vitals.getFID(metricHandler);
      vitals.getFCP(metricHandler);
      vitals.getLCP(metricHandler);
      vitals.getTTFB(metricHandler);
    } catch (error) {
      console.error("Failed to load web vitals module:", error);
    }
  }
};

export default trackWebVitals;
