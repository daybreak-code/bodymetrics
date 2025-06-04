import { useState } from 'react';
import { useDiseaseStore } from '../stores/diseaseStore';
import { Lock, Unlock, AlertTriangle, Download, Plus, X } from 'lucide-react';

const DiseaseManagementPage = () => {
  const { 
    diseases, addDisease, updateDisease, deleteDisease,
    addMedication, privacyModeEnabled, setPrivacyMode,
    validatePrivacyPassword, exportData
  } = useDiseaseStore();
  
  const [showPrivacyPrompt, setShowPrivacyPrompt] = useState(false);
  const [privacyPassword, setPrivacyPassword] = useState('');
  const [privacyError, setPrivacyError] = useState('');
  const [authenticated, setAuthenticated] = useState(!privacyModeEnabled);
  
  const [newDisease, setNewDisease] = useState({
    name: '',
    symptoms: '',
    onsetDate: '',
    isPrivate: false
  });
  
  const [newMedication, setNewMedication] = useState({
    diseaseId: '',
    name: '',
    dosage: '',
    reminderTime: ''
  });
  
  const [showMedicationForm, setShowMedicationForm] = useState(false);

  const handleDiseaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addDisease({
      name: newDisease.name,
      symptoms: newDisease.symptoms,
      onsetDate: newDisease.onsetDate,
      medications: [],
      isPrivate: newDisease.isPrivate
    });
    
    // Reset form
    setNewDisease({
      name: '',
      symptoms: '',
      onsetDate: '',
      isPrivate: false
    });
  };
  
  const handleMedicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addMedication(newMedication.diseaseId, {
      name: newMedication.name,
      dosage: newMedication.dosage,
      reminderTime: newMedication.reminderTime
    });
    
    // Reset form
    setNewMedication({
      diseaseId: '',
      name: '',
      dosage: '',
      reminderTime: ''
    });
    
    setShowMedicationForm(false);
  };
  
  const togglePrivacyMode = (enabled: boolean) => {
    if (enabled) {
      setShowPrivacyPrompt(true);
    } else {
      setPrivacyMode(false);
      setAuthenticated(true);
    }
  };
  
  const handlePrivacySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (privacyModeEnabled) {
      // Try to authenticate
      if (validatePrivacyPassword(privacyPassword)) {
        setAuthenticated(true);
        setShowPrivacyPrompt(false);
        setPrivacyError('');
      } else {
        setPrivacyError('Incorrect password');
      }
    } else {
      // Set new password and enable privacy mode
      if (privacyPassword.length < 6) {
        setPrivacyError('Password must be at least 6 characters');
        return;
      }
      
      setPrivacyMode(true, privacyPassword);
      setShowPrivacyPrompt(false);
      setPrivacyError('');
    }
    
    setPrivacyPassword('');
  };

  const handleExport = () => {
    const csvContent = exportData();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'bodymetrics-diseases.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-2">Disease Management</h1>
      <p className="text-neutral-600 mb-8">
        Record and manage your disease information, including symptoms, onset date, and medication details.
      </p>
      
      {/* Privacy Mode Toggle */}
      <div className="card mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-lg">Privacy Mode</h2>
            <p className="text-neutral-600 text-sm">
              Hide sensitive disease data with password protection.
            </p>
          </div>
          <div className="flex items-center">
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox"
                className="sr-only"
                checked={privacyModeEnabled}
                onChange={() => togglePrivacyMode(!privacyModeEnabled)}
              />
              <span className={`relative w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                privacyModeEnabled ? 'bg-primary-600' : 'bg-neutral-300'
              }`}>
                <span className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out ${
                  privacyModeEnabled ? 'transform translate-x-6' : ''
                }`}></span>
              </span>
            </label>
          </div>
        </div>
      </div>
      
      {/* Privacy Mode Prompt */}
      {showPrivacyPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {privacyModeEnabled ? 'Enter Privacy Password' : 'Set Privacy Password'}
              </h2>
              <button 
                onClick={() => {
                  setShowPrivacyPrompt(false);
                  setPrivacyError('');
                }}
                className="text-neutral-400 hover:text-neutral-600"
              >
                <X size={20} />
              </button>
            </div>
            
            {privacyError && (
              <div className="mb-4 p-3 bg-danger/10 text-danger rounded-lg text-sm">
                {privacyError}
              </div>
            )}
            
            <form onSubmit={handlePrivacySubmit}>
              <div className="mb-4">
                <label htmlFor="privacyPassword" className="block text-sm font-medium text-neutral-700 mb-1">
                  {privacyModeEnabled ? 'Password' : 'Create Password'}
                </label>
                <input
                  type="password"
                  id="privacyPassword"
                  className="input"
                  value={privacyPassword}
                  onChange={(e) => setPrivacyPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowPrivacyPrompt(false);
                    setPrivacyError('');
                  }}
                  className="btn-secondary mr-2"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  {privacyModeEnabled ? 'Unlock' : 'Set Password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {privacyModeEnabled && !authenticated ? (
        <div className="card text-center p-8">
          <div className="flex justify-center mb-4">
            <Lock size={48} className="text-neutral-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Private Content</h3>
          <p className="text-neutral-600 mb-4">
            This information is password protected.
          </p>
          <button
            onClick={() => setShowPrivacyPrompt(true)}
            className="btn-primary mx-auto"
          >
            <Unlock size={18} className="mr-2" />
            Unlock
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Disease Form */}
            <section className="card">
              <h2 className="text-xl font-semibold mb-4">Disease Information</h2>
              
              <form onSubmit={handleDiseaseSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="diseaseName" className="block text-sm font-medium text-neutral-700 mb-1">
                      Disease Name
                    </label>
                    <input
                      type="text"
                      id="diseaseName"
                      className="input"
                      value={newDisease.name}
                      onChange={(e) => setNewDisease({ ...newDisease, name: e.target.value })}
                      placeholder="e.g., Hypertension"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="symptoms" className="block text-sm font-medium text-neutral-700 mb-1">
                      Symptoms
                    </label>
                    <textarea
                      id="symptoms"
                      className="input"
                      value={newDisease.symptoms}
                      onChange={(e) => setNewDisease({ ...newDisease, symptoms: e.target.value })}
                      placeholder="Describe your symptoms"
                      rows={3}
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="onsetDate" className="block text-sm font-medium text-neutral-700 mb-1">
                      Onset Date
                    </label>
                    <input
                      type="date"
                      id="onsetDate"
                      className="input"
                      value={newDisease.onsetDate}
                      onChange={(e) => setNewDisease({ ...newDisease, onsetDate: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isPrivate"
                      checked={newDisease.isPrivate}
                      onChange={(e) => setNewDisease({ ...newDisease, isPrivate: e.target.checked })}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                    />
                    <label htmlFor="isPrivate" className="ml-2 block text-sm text-neutral-700">
                      Mark as private
                    </label>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button type="submit" className="btn-primary w-full">
                    Save Information
                  </button>
                </div>
              </form>
            </section>
            
            {/* Medication Form */}
            <section className="card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Medication Details</h2>
                {!showMedicationForm && diseases.length > 0 && (
                  <button
                    onClick={() => setShowMedicationForm(true)}
                    className="btn-secondary flex items-center text-sm"
                  >
                    <Plus size={16} className="mr-1" />
                    Add Medication
                  </button>
                )}
              </div>
              
              {showMedicationForm ? (
                <form onSubmit={handleMedicationSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="diseaseId" className="block text-sm font-medium text-neutral-700 mb-1">
                        Disease
                      </label>
                      <select
                        id="diseaseId"
                        className="input"
                        value={newMedication.diseaseId}
                        onChange={(e) => setNewMedication({ ...newMedication, diseaseId: e.target.value })}
                        required
                      >
                        <option value="">Select disease</option>
                        {diseases.map((disease) => (
                          <option key={disease.id} value={disease.id}>
                            {disease.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="medicationName" className="block text-sm font-medium text-neutral-700 mb-1">
                        Medication Name
                      </label>
                      <input
                        type="text"
                        id="medicationName"
                        className="input"
                        value={newMedication.name}
                        onChange={(e) => setNewMedication({ ...newMedication, name: e.target.value })}
                        placeholder="e.g., Lisinopril"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="dosage" className="block text-sm font-medium text-neutral-700 mb-1">
                        Dosage
                      </label>
                      <input
                        type="text"
                        id="dosage"
                        className="input"
                        value={newMedication.dosage}
                        onChange={(e) => setNewMedication({ ...newMedication, dosage: e.target.value })}
                        placeholder="e.g., 10mg"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="reminderTime" className="block text-sm font-medium text-neutral-700 mb-1">
                        Medication Reminder
                      </label>
                      <input
                        type="time"
                        id="reminderTime"
                        className="input"
                        value={newMedication.reminderTime}
                        onChange={(e) => setNewMedication({ ...newMedication, reminderTime: e.target.value })}
                        placeholder="Set reminder time"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6 flex space-x-2">
                    <button 
                      type="button" 
                      className="btn-secondary flex-1"
                      onClick={() => {
                        setShowMedicationForm(false);
                        setNewMedication({
                          diseaseId: '',
                          name: '',
                          dosage: '',
                          reminderTime: ''
                        });
                      }}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn-primary flex-1">
                      Add Medication
                    </button>
                  </div>
                </form>
              ) : diseases.length === 0 ? (
                <div className="text-center py-8">
                  <AlertTriangle size={36} className="mx-auto text-warning mb-3" />
                  <p className="text-neutral-600">
                    Add a disease first before adding medications
                  </p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-neutral-600">
                    Click the "Add Medication" button to add a new medication
                  </p>
                </div>
              )}
            </section>
          </div>
          
          {/* Medical Documents */}
          <section className="card mt-8">
            <h2 className="text-xl font-semibold mb-4">Medical Documents</h2>
            
            <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center">
              <p className="text-neutral-600 mb-4">
                Upload Medical Documents<br />
                Drag and drop files here, or click to browse.
              </p>
              <button className="btn-secondary">
                Upload Files
              </button>
            </div>
          </section>
          
          {/* Disease List */}
          {diseases.length > 0 && (
            <section className="card mt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Your Conditions</h2>
                <button onClick={handleExport} className="btn-secondary flex items-center text-sm">
                  <Download size={16} className="mr-1" />
                  Export Data
                </button>
              </div>
              
              <div className="divide-y divide-neutral-100">
                {diseases.map((disease) => (
                  <div key={disease.id} className="py-4 animate-fade-in">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg flex items-center">
                          {disease.name}
                          {disease.isPrivate && (
                            <Lock size={16} className="ml-2 text-neutral-400" />
                          )}
                        </h3>
                        <p className="text-sm text-neutral-600 mt-1">
                          Since {disease.onsetDate}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteDisease(disease.id)}
                        className="text-neutral-400 hover:text-danger"
                      >
                        <X size={18} />
                      </button>
                    </div>
                    
                    <div className="mt-2">
                      <h4 className="text-sm font-medium text-neutral-700">Symptoms:</h4>
                      <p className="text-sm text-neutral-600 mt-1">{disease.symptoms}</p>
                    </div>
                    
                    {disease.medications.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-neutral-700">Medications:</h4>
                        <ul className="mt-2 space-y-2">
                          {disease.medications.map((medication) => (
                            <li key={medication.id} className="bg-neutral-50 rounded-lg p-3">
                              <div className="flex justify-between">
                                <div>
                                  <p className="font-medium">{medication.name}</p>
                                  <p className="text-sm text-neutral-600">{medication.dosage}</p>
                                </div>
                                {medication.reminderTime && (
                                  <div className="text-sm text-neutral-600">
                                    Reminder: {medication.reminderTime}
                                  </div>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default DiseaseManagementPage;