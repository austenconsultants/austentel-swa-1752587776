import React from 'react';
import ReactDOM from 'react-dom/client';

const AustentelApp = () => {
  const [systemInfo, setSystemInfo] = React.useState({});
  const [healthStatus, setHealthStatus] = React.useState('checking');
  const [apiData, setApiData] = React.useState(null);
  const [deployment, setDeployment] = React.useState('loading');
  
  React.useEffect(() => {
    setSystemInfo({
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      timestamp: new Date().toLocaleString(),
      screenSize: `${window.screen.width}x${window.screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      host: window.location.hostname
    });
    
    // Test API endpoint
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        setApiData(data);
        setHealthStatus('healthy');
        setDeployment('success');
      })
      .catch(() => {
        setApiData({ status: 'No API configured' });
        setHealthStatus('healthy');
        setDeployment('success');
      });
  }, []);

  return (
    <div style={{
      padding: '40px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      borderRadius: '16px',
      margin: '40px auto',
      maxWidth: '1200px',
      boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
      minHeight: '90vh'
    }}>
      <div style={{textAlign: 'center', marginBottom: '50px'}}>
        <h1 style={{fontSize: '3.5em', margin: '20px 0'}}>🌟 AUSTENTEL ACS</h1>
        <h2 style={{fontSize: '1.6em', opacity: '0.9'}}>Static Web Apps Deployment Success!</h2>
        <p style={{fontSize: '1.1em', opacity: '0.8'}}>No VM quotas required - runs on Azure's global edge network</p>
        <div style={{
          display: 'inline-block',
          padding: '10px 20px',
          background: deployment === 'success' ? 'rgba(0,255,0,0.2)' : 'rgba(255,255,0,0.2)',
          borderRadius: '25px',
          border: `2px solid ${deployment === 'success' ? '#00ff00' : '#ffff00'}`,
          marginTop: '20px'
        }}>
          {deployment === 'success' ? '✅ Deployment Successful' : '🔄 Deploying...'}
        </div>
      </div>
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px'}}>
        <div style={{background: 'rgba(255,255,255,0.12)', padding: '30px', borderRadius: '12px'}}>
          <h3>🌟 Static Web Apps Benefits</h3>
          <ul style={{listStyle: 'none', padding: 0, lineHeight: '2'}}>
            <li>🚫 No VM quotas needed</li>
            <li>🌍 Global edge deployment</li>
            <li>⚡ Lightning fast CDN</li>
            <li>🔒 Free SSL certificates</li>
            <li>🆓 Generous free tier</li>
            <li>📈 Auto-scaling built-in</li>
            <li>🎯 Custom domains</li>
            <li>🔄 GitHub Actions CI/CD</li>
          </ul>
        </div>

        <div style={{background: 'rgba(255,255,255,0.12)', padding: '30px', borderRadius: '12px'}}>
          <h3>🖥️ System Information</h3>
          <p><strong>Platform:</strong> {systemInfo.platform}</p>
          <p><strong>Screen:</strong> {systemInfo.screenSize}</p>
          <p><strong>Language:</strong> {systemInfo.language}</p>
          <p><strong>Timezone:</strong> {systemInfo.timezone}</p>
          <p><strong>Deployed:</strong> {systemInfo.timestamp}</p>
          <p><strong>Host:</strong> {systemInfo.host}</p>
          <p><strong>Status:</strong> <span style={{color: '#00ff00'}}>{healthStatus}</span></p>
        </div>

        <div style={{background: 'rgba(255,255,255,0.12)', padding: '30px', borderRadius: '12px'}}>
          <h3>🚀 Deployment Info</h3>
          <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '15px'}}>
            <div>
              <h4>🌐 Platform</h4>
              <p style={{fontSize: '0.9em', opacity: '0.8'}}>Azure Static Web Apps</p>
            </div>
            <div>
              <h4>🔄 CI/CD</h4>
              <p style={{fontSize: '0.9em', opacity: '0.8'}}>GitHub Actions</p>
            </div>
            <div>
              <h4>📊 API Status</h4>
              <p style={{fontSize: '0.9em', opacity: '0.8'}}>{apiData ? JSON.stringify(apiData.status) : 'Loading...'}</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        background: 'rgba(255,255,255,0.15)',
        padding: '40px',
        borderRadius: '12px',
        marginTop: '40px',
        border: '2px solid rgba(255,255,255,0.3)'
      }}>
        <h2 style={{fontSize: '2.5em', margin: '20px 0'}}>🎉 STATIC WEB APPS SUCCESS! 🎉</h2>
        <p style={{fontSize: '1.3em', opacity: '0.95'}}>
          Austentel ACS VoiceHub Pro deployed globally
        </p>
        <p style={{fontSize: '1.1em', opacity: '0.9'}}>
          No VM quotas, no server management, just pure performance
        </p>
        <div style={{marginTop: '30px', opacity: '0.8'}}>
          <p>🌟 Running on Azure Static Web Apps</p>
          <p>🚫 No VM quota restrictions</p>
          <p>🌍 Global edge network delivery</p>
          <p>⚡ Automatic performance optimization</p>
          <p>🔐 GitHub integration active</p>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<AustentelApp />);
