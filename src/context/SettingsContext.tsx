import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Service {
  id: string;
  name: string;
  minutesPerJob: number;
}

export interface FixedPriceService {
  id: string;
  name: string;
  price: number;
}

interface Settings {
  services: Service[];
  fixedPriceServices: FixedPriceService[];
  hourlyRate: number;
  currency: string;
  companyName: string;
  defaultQuantities: Record<string, number>;
}

interface SettingsContextType {
  settings: Settings;
  updateSettings: (newSettings: Partial<Settings>) => void;
  addService: (name: string, minutesPerJob: number) => void;
  updateService: (id: string, updates: Partial<Omit<Service, 'id'>>) => void;
  removeService: (id: string) => void;
  addFixedPriceService: (name: string, price: number) => void;
  updateFixedPriceService: (id: string, updates: Partial<Omit<FixedPriceService, 'id'>>) => void;
  removeFixedPriceService: (id: string) => void;
}

const defaultServices: Service[] = [
  { id: "1", name: "Monthly Bookkeeping", minutesPerJob: 1 },
  { id: "2", name: "Monthly Payroll Management", minutesPerJob: 60 },
  { id: "3", name: "Monthly Contractor Payments Management", minutesPerJob: 30 },
  { id: "4", name: "Monthly Invoicing", minutesPerJob: 10 },
  { id: "5", name: "Monthly Billing", minutesPerJob: 10 },
  { id: "6", name: "Monthly Accounts Payable Management", minutesPerJob: 15 },
  { id: "7", name: "Monthly Receivable Management", minutesPerJob: 15 },
];

const defaultFixedPriceServices: FixedPriceService[] = [
  { id: "fp1", name: "Chart of Accounts Setup (For New Books)", price: 300 },
  { id: "fp2", name: "HMRC and Companies House Joint Filing (for UK)", price: 300 },
  { id: "fp3", name: "Strategic Financial Advice", price: 50 },
  { id: "fp4", name: "Monthly Financial Performance Analysis", price: 50 },
  { id: "fp5", name: "Monthly Cash Flow Forecasting", price: 50 },
  { id: "fp6", name: "Monthly Budgeting", price: 50 },
  { id: "fp7", name: "Monthly Profit and Loss Reporting", price: 50 },
  { id: "fp8", name: "VAT Filling", price: 17 },
];

const defaultSettings: Settings = {
  services: defaultServices,
  fixedPriceServices: defaultFixedPriceServices,
  hourlyRate: 20,
  currency: '$',
  companyName: 'Your Company',
  defaultQuantities: {},
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Settings>(() => {
    const saved = localStorage.getItem('serviceCalculatorSettings');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Migration: handle old format
      if (!parsed.services) {
        return { ...defaultSettings, ...parsed };
      }
      return { ...defaultSettings, ...parsed };
    }
    return defaultSettings;
  });

  const saveSettings = (newSettings: Settings) => {
    localStorage.setItem('serviceCalculatorSettings', JSON.stringify(newSettings));
    setSettings(newSettings);
  };

  const updateSettings = (newSettings: Partial<Settings>) => {
    saveSettings({ ...settings, ...newSettings });
  };

  const addService = (name: string, minutesPerJob: number) => {
    const newService: Service = {
      id: Date.now().toString(),
      name,
      minutesPerJob,
    };
    saveSettings({
      ...settings,
      services: [...settings.services, newService],
    });
  };

  const updateService = (id: string, updates: Partial<Omit<Service, 'id'>>) => {
    saveSettings({
      ...settings,
      services: settings.services.map((s) =>
        s.id === id ? { ...s, ...updates } : s
      ),
    });
  };

  const removeService = (id: string) => {
    saveSettings({
      ...settings,
      services: settings.services.filter((s) => s.id !== id),
    });
  };

  const addFixedPriceService = (name: string, price: number) => {
    const newService: FixedPriceService = {
      id: `fp${Date.now()}`,
      name,
      price,
    };
    saveSettings({
      ...settings,
      fixedPriceServices: [...settings.fixedPriceServices, newService],
    });
  };

  const updateFixedPriceService = (id: string, updates: Partial<Omit<FixedPriceService, 'id'>>) => {
    saveSettings({
      ...settings,
      fixedPriceServices: settings.fixedPriceServices.map((s) =>
        s.id === id ? { ...s, ...updates } : s
      ),
    });
  };

  const removeFixedPriceService = (id: string) => {
    saveSettings({
      ...settings,
      fixedPriceServices: settings.fixedPriceServices.filter((s) => s.id !== id),
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        addService,
        updateService,
        removeService,
        addFixedPriceService,
        updateFixedPriceService,
        removeFixedPriceService
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};