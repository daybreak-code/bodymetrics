import { useState } from 'react';
import { useAuthStore } from '../stores/authStore';
import { useMeasurementStore } from '../stores/measurementStore';
import { useDiseaseStore } from '../stores/diseaseStore';
import { Download, Save, User, Bell, Shield, LogOut } from 'lucide-react';

const SettingsPage = () => {
  const { user, logout } = useAuthStore();
  const { exportData: exportMeasurements } = useMeasurementStore();
  const { exportData: exportDiseases, setPrivacyMode, privacyModeEnabled } = useDiseaseStore();
  
  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });
  
  const [privacySettings, setPrivacySettings] = useState({
    enablePrivacyMode: privacyModeEnabled,
    newPassword: '',
    confirmPassword: '',
  });
  
  const [notifications, setNotifications] = useState({
    medicationReminders: true,
    measurementReminders: true,
    emailNotifications: true,
  });
  
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update profile logic would go here
    
    setSuccessMessage('Profile updated successfully');
    setTimeout(() => setSuccessMessage(''), 3000);
  };
  
  const handlePrivacySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (privacySettings.enablePrivacyMode && 
        (privacySettings.newPassword !== privacySettings.confirmPassword)) {
      setErrorMessage('Passwords do not match');
      return;
    }
    
    setPrivacyMode(
      privacySettings.enablePrivacyMode,
      privacySettings.enablePrivacyMode ? privacySettings.newPassword : undefined
    );
    
    setSuccessMessage('Privacy settings updated successfully');
    setTimeout(() => setSuccessMessage(''), 3000);
    
    // Reset password fields
    setPrivacySettings({
      ...privacySettings,
      newPassword: '',
      confirmPassword: '',
    });
  };
  
  const handleNotificationsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update notifications logic would go here
    
    setSuccessMessage('Notification preferences updated successfully');
    setTimeout(() => setSuccessMessage(''), 3000);
  };
  
  const handleExportAllData = () => {
    // Create a ZIP file with all data
    const measurementsCsv = exportMeasurements();
    const diseasesCsv = exportDiseases();
    
    // For now, just download the CSVs separately
    const measurementsBlob = new Blob([measurementsCsv], { type: 'text/csv;charset=utf-8;' });
    const diseasesBlob = new Blob([diseasesCsv], { type: 'text/csv;charset=utf-8;' });
    
    const measurementsUrl = URL.createObjectURL(measurementsBlob);
    const diseasesUrl = URL.createObjectURL(diseasesBlob);
    
    const measurementsLink = document.createElement('a');
    measurementsLink.setAttribute('href', measurementsUrl);
    measurementsLink.setAttribute('download', 'bodymetrics-measurements.csv');
    document.body.appendChild(measurementsLink);
    measurementsLink.click();
    
    const diseasesLink = document.createElement('a');
    diseasesLink.setAttribute('href', diseasesUrl);
    diseasesLink.setAttribute('download', 'bodymetrics-diseases.csv');
    document.body.appendChild(diseasesLink);
    diseasesLink.click();
    
    document.body.removeChild(measurementsLink);
    document.body.removeChild(diseasesLink);
  };
  
  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-2">Settings</h1>
      <p className="text-neutral-600 mb-8">Manage your account settings and preferences.</p>
      
      {successMessage && (
        <div className="mb-6 p-4 bg-success/10 text-success rounded-lg animate-fade-in">
          {successMessage}
        </div>
      )}
      
      {errorMessage && (
        <div className="mb-6 p-4 bg-danger/10 text-danger rounded-lg animate-fade-in">
          {errorMessage}
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <section className="card">
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-lg bg-primary-100 text-primary-600 mr-3">
              <User size={20} />
            </div>
            <h2 className="text-xl font-semibold">Profile Settings</h2>
          </div>
          
          <form onSubmit={handleProfileSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="input"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="input"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  required
                />
              </div>
            </div>
            
            <div className="mt-6">
              <button type="submit" className="btn-primary flex items-center justify-center">
                <Save size={18} className="mr-2" />
                Update Profile
              </button>
            </div>
          </form>
        </section>
        
        {/* Privacy Settings */}
        <section className="card">
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-lg bg-primary-100 text-primary-600 mr-3">
              <Shield size={20} />
            </div>
            <h2 className="text-xl font-semibold">Privacy Settings</h2>
          </div>
          
          <form onSubmit={handlePrivacySubmit}>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="enablePrivacyMode"
                  checked={privacySettings.enablePrivacyMode}
                  onChange={(e) => setPrivacySettings({
                    ...privacySettings,
                    enablePrivacyMode: e.target.checked
                  })}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                />
                <label htmlFor="enablePrivacyMode" className="ml-2 block text-sm text-neutral-700">
                  Enable Privacy Mode
                </label>
              </div>
              
              {privacySettings.enablePrivacyMode && (
                <>
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-neutral-700 mb-1">
                      {privacyModeEnabled ? 'New Password' : 'Privacy Password'}
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      className="input"
                      value={privacySettings.newPassword}
                      onChange={(e) => setPrivacySettings({
                        ...privacySettings,
                        newPassword: e.target.value
                      })}
                      placeholder="Enter password"
                      minLength={6}
                      required={privacySettings.enablePrivacyMode}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="input"
                      value={privacySettings.confirmPassword}
                      onChange={(e) => setPrivacySettings({
                        ...privacySettings,
                        confirmPassword: e.target.value
                      })}
                      placeholder="Confirm password"
                      minLength={6}
                      required={privacySettings.enablePrivacyMode}
                    />
                  </div>
                </>
              )}
            </div>
            
            <div className="mt-6">
              <button type="submit" className="btn-primary w-full">
                Save Privacy Settings
              </button>
            </div>
          </form>
        </section>
        
        {/* Notification Settings */}
        <section className="card">
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-lg bg-primary-100 text-primary-600 mr-3">
              <Bell size={20} />
            </div>
            <h2 className="text-xl font-semibold">Notification Settings</h2>
          </div>
          
          <form onSubmit={handleNotificationsSubmit}>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="medicationReminders"
                  checked={notifications.medicationReminders}
                  onChange={(e) => setNotifications({
                    ...notifications,
                    medicationReminders: e.target.checked
                  })}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                />
                <label htmlFor="medicationReminders" className="ml-2 block text-sm text-neutral-700">
                  Medication Reminders
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="measurementReminders"
                  checked={notifications.measurementReminders}
                  onChange={(e) => setNotifications({
                    ...notifications,
                    measurementReminders: e.target.checked
                  })}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                />
                <label htmlFor="measurementReminders" className="ml-2 block text-sm text-neutral-700">
                  Measurement Reminders
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emailNotifications"
                  checked={notifications.emailNotifications}
                  onChange={(e) => setNotifications({
                    ...notifications,
                    emailNotifications: e.target.checked
                  })}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                />
                <label htmlFor="emailNotifications" className="ml-2 block text-sm text-neutral-700">
                  Email Notifications
                </label>
              </div>
            </div>
            
            <div className="mt-6">
              <button type="submit" className="btn-primary w-full">
                Save Notification Settings
              </button>
            </div>
          </form>
        </section>
        
        {/* Data Management */}
        <section className="card">
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-lg bg-primary-100 text-primary-600 mr-3">
              <Download size={20} />
            </div>
            <h2 className="text-xl font-semibold">Data Management</h2>
          </div>
          
          <p className="text-neutral-600 text-sm mb-6">
            Export your data for backup or analysis purposes.
          </p>
          
          <button 
            onClick={handleExportAllData}
            className="btn-primary w-full mb-4"
          >
            Export All Data (CSV)
          </button>
        </section>
      </div>
    </div>
  );
};

export default SettingsPage;