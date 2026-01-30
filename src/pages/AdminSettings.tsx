import { useState } from 'react';
import { useSettings } from '@/context/SettingsContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Settings, Clock, DollarSign, ArrowRight, Plus, Trash2, Check, ArrowLeft, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminSettings = () => {
    const { settings, updateSettings, addService, updateService, removeService, isSyncing } = useSettings();
    const [hourlyRate, setHourlyRate] = useState(settings.hourlyRate.toString());
    const [newServiceName, setNewServiceName] = useState('');
    const [newServiceMinutes, setNewServiceMinutes] = useState('');
    const [saved, setSaved] = useState(false);

    // Sync local hourlyRate state with settings if they change from server
    useState(() => {
        setHourlyRate(settings.hourlyRate.toString());
    });

    const handleSaveRate = () => {
        const rate = Math.max(0, parseFloat(hourlyRate) || 0);
        updateSettings({ hourlyRate: rate }, true);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const handleRateChange = (value: string) => {
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            setHourlyRate(value);
        }
    };

    const handleAddService = () => {
        if (newServiceName.trim() && newServiceMinutes) {
            addService(newServiceName.trim(), parseFloat(newServiceMinutes) || 0, true);
            setNewServiceName('');
            setNewServiceMinutes('');
        }
    };

    const handleUpdateServiceName = (id: string, name: string) => {
        updateService(id, { name }, true);
    };

    const handleMinutesChange = (id: string, value: string) => {
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            updateService(id, { minutesPerJob: parseFloat(value) || 0 }, true);
        }
    };

    const handleRemoveService = (id: string) => {
        removeService(id, true);
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-background text-foreground font-sans selection:bg-primary/30">
            {/* Background Decor */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-float opacity-50" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[120px] animate-float opacity-50" style={{ animationDelay: "-3s" }} />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] dark:opacity-[0.05]" />
            </div>

            <div className="relative z-10 container max-w-4xl py-12 px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between mb-10"
                >
                    <div className="flex items-center gap-4">
                        <Link to="/">
                            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-white/50">
                                <ArrowLeft className="w-5 h-5 text-muted-foreground" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                                Admin Dashboard
                            </h1>
                            <div className="flex items-center gap-2">
                                <p className="text-sm text-muted-foreground font-medium">Configure Services & Pricing</p>
                                {isSyncing && (
                                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-primary uppercase tracking-widest animate-pulse">
                                        <div className="w-1 h-1 rounded-full bg-primary" />
                                        Syncing
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="p-2 bg-white/50 backdrop-blur-md border border-white/20 rounded-xl shadow-sm">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                </motion.div>

                <div className="grid gap-8">
                    {/* Hourly Rate Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="glass-card rounded-3xl p-8"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                                    <DollarSign className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold">Hourly Base Rate</h2>
                                    <p className="text-sm text-muted-foreground">Set calculation base for timed services</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 items-end max-w-sm">
                            <div className="flex-1 space-y-2">
                                <Label htmlFor="hourlyRate" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Rate per hour</Label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">
                                        {settings.currency}
                                    </span>
                                    <Input
                                        id="hourlyRate"
                                        type="text"
                                        inputMode="decimal"
                                        value={hourlyRate}
                                        onChange={(e) => handleRateChange(e.target.value)}
                                        placeholder="e.g., 40"
                                        className="pl-10 h-12 text-lg font-bold bg-white/40 dark:bg-black/20 border-border/50 focus-visible:ring-primary/30 rounded-xl transition-all"
                                    />
                                </div>
                            </div>
                            <Button onClick={handleSaveRate} className="h-12 w-24 rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" disabled={saved || isSyncing}>
                                {saved ? <Check className="w-5 h-5" /> : isSyncing ? '...' : 'Update'}
                            </Button>
                        </div>
                    </motion.div>

                    {/* Services Management */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card rounded-3xl p-8"
                    >
                        <div className="flex items-start justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold">Service Catalog</h2>
                                    <p className="text-sm text-muted-foreground">Manage available services and estimates</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <AnimatePresence>
                                {settings.services.map((service, index) => (
                                    <motion.div
                                        key={service.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group flex items-center gap-4 p-4 bg-white/40 dark:bg-black/10 rounded-2xl border border-transparent hover:border-border/60 transition-all hover:shadow-sm"
                                    >
                                        <div className="flex-1">
                                            <Input
                                                value={service.name}
                                                onChange={(e) => handleUpdateServiceName(service.id, e.target.value)}
                                                className="font-medium bg-transparent border-transparent hover:bg-white/40 hover:border-border/40 focus:bg-white/60 focus:border-primary/50 h-10 px-3 rounded-lg transition-all"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center relative">
                                                <Input
                                                    type="text"
                                                    inputMode="decimal"
                                                    value={service.minutesPerJob}
                                                    onChange={(e) => handleMinutesChange(service.id, e.target.value)}
                                                    className="w-24 h-10 text-center font-mono bg-white/40 border-transparent hover:border-border/40 focus:border-primary/50"
                                                />
                                                <span className="absolute right-3 text-xs text-muted-foreground pointer-events-none">min</span>
                                            </div>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleRemoveService(service.id)}
                                            className="h-10 w-10 text-muted-foreground/50 hover:text-destructive hover:bg-destructive/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Add New Service UI */}
                        <div className="mt-8 pt-6 border-t border-border/40">
                            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">Add New Service</Label>
                            <div className="flex gap-3">
                                <Input
                                    placeholder="Service name..."
                                    value={newServiceName}
                                    onChange={(e) => setNewServiceName(e.target.value)}
                                    className="flex-1 h-12 bg-white/40 dark:bg-black/20 border-border/50 rounded-xl"
                                />
                                <div className="flex items-center gap-2">
                                    <Input
                                        type="text"
                                        inputMode="decimal"
                                        placeholder="Min"
                                        value={newServiceMinutes}
                                        onChange={(e) => {
                                            if (e.target.value === '' || /^\d*\.?\d*$/.test(e.target.value)) {
                                                setNewServiceMinutes(e.target.value);
                                            }
                                        }}
                                        className="w-24 h-12 text-center bg-white/40 dark:bg-black/20 border-border/50 rounded-xl"
                                    />
                                </div>
                                <Button
                                    onClick={handleAddService}
                                    disabled={!newServiceName.trim() || !newServiceMinutes}
                                    className="h-12 px-6 rounded-xl font-medium"
                                >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;