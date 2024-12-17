// Simple analytics utility
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // In production, this would integrate with actual analytics service
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, properties);
  }
}

export function trackPageView(path: string) {
  trackEvent('page_view', { path });
}

export function trackButtonClick(buttonName: string) {
  trackEvent('button_click', { button: buttonName });
}

export function trackFormSubmission(formName: string) {
  trackEvent('form_submission', { form: formName });
}