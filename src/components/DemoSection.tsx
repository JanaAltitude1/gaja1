import React, { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Ban,
  Bug,
  CheckCircle2,
  ClipboardList,
  PlayCircle,
  Plus,
  RotateCcw,
  Trash2,
  XCircle,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';

type DemoTab = 'execution' | 'cases' | 'defects';
type ExecutionStatus = 'Passed' | 'Failed' | 'Blocked' | 'Pending';
type DefectSeverity = 'Critical' | 'High' | 'Medium';
type DefectStatus = 'Open' | 'In Review' | 'Verified';

interface DemoExecutionCase {
  id: string;
  title: string;
  suite: string;
  status: ExecutionStatus;
}

interface DemoTestCase {
  id: string;
  title: string;
  suite: string;
  priority: 'High' | 'Medium' | 'Low';
}

interface DemoDefect {
  id: string;
  title: string;
  severity: DefectSeverity;
  status: DefectStatus;
  linkedCase: string;
}

const INITIAL_EXECUTIONS: DemoExecutionCase[] = [
  {
    id: 'TC-101',
    title: 'Verify workspace invitation link expiration',
    suite: 'Authentication',
    status: 'Passed',
  },
  {
    id: 'TC-102',
    title: 'Validate test suite batch status transition',
    suite: 'Suite Engine',
    status: 'Passed',
  },
  {
    id: 'TC-103',
    title: 'Check CSV export UTF-8 character preservation',
    suite: 'Reporting',
    status: 'Failed',
  },
  {
    id: 'TC-104',
    title: 'Verify role-based test execution permission guard',
    suite: 'Access Control',
    status: 'Blocked',
  },
];

const INITIAL_CASES: DemoTestCase[] = [
  {
    id: 'TC-201',
    title: 'Create testing project with assigned QA lead',
    suite: 'Project Setup',
    priority: 'High',
  },
  {
    id: 'TC-202',
    title: 'Link newly logged defect to failed execution step',
    suite: 'Defect Workflow',
    priority: 'High',
  },
  {
    id: 'TC-203',
    title: 'Filter release suite summary by completion state',
    suite: 'QA Analytics',
    priority: 'Medium',
  },
];

const INITIAL_DEFECTS: DemoDefect[] = [
  {
    id: 'BUG-41',
    title: 'Exported CSV drops accented characters in test notes',
    severity: 'High',
    status: 'Open',
    linkedCase: 'TC-103',
  },
  {
    id: 'BUG-42',
    title: 'Session timeout modal blocks active execution save',
    severity: 'Critical',
    status: 'In Review',
    linkedCase: 'TC-104',
  },
  {
    id: 'BUG-43',
    title: 'Suite filter count lags after removing archived case',
    severity: 'Medium',
    status: 'Verified',
    linkedCase: 'TC-203',
  },
];

const DEMO_MODULES: {
  id: DemoTab;
  title: string;
  description: string;
  icon: typeof PlayCircle;
  accent: 'blue' | 'orange';
}[] = [
  {
    id: 'execution',
    title: 'Execution Runner',
    description: 'Record passed, failed, or blocked runs and monitor live suite completion.',
    icon: PlayCircle,
    accent: 'blue',
  },
  {
    id: 'cases',
    title: 'Test Case Builder',
    description: 'Author structured test cases, assign suites, and set testing priorities.',
    icon: ClipboardList,
    accent: 'orange',
  },
  {
    id: 'defects',
    title: 'Defect Triage',
    description: 'Filter software defects by severity and track resolution through verification.',
    icon: Bug,
    accent: 'blue',
  },
];

export const DemoSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<DemoTab>('execution');

  const [executions, setExecutions] =
    useState<DemoExecutionCase[]>(INITIAL_EXECUTIONS);

  const [testCases, setTestCases] = useState<DemoTestCase[]>(INITIAL_CASES);
  const [newCaseTitle, setNewCaseTitle] = useState('');
  const [newCaseSuite, setNewCaseSuite] = useState('Authentication');
  const [newCasePriority, setNewCasePriority] = useState<'High' | 'Medium' | 'Low'>('High');
  const [caseError, setCaseError] = useState('');

  const [defects, setDefects] = useState<DemoDefect[]>(INITIAL_DEFECTS);
  const [severityFilter, setSeverityFilter] = useState<'All' | DefectSeverity>('All');

  const executionStats = useMemo(() => {
    const total = executions.length;
    const passed = executions.filter((item) => item.status === 'Passed').length;
    const failed = executions.filter((item) => item.status === 'Failed').length;
    const blocked = executions.filter((item) => item.status === 'Blocked').length;
    const passRate = total > 0 ? Math.round((passed / total) * 100) : 0;
    return { total, passed, failed, blocked, passRate };
  }, [executions]);

  const filteredDefects = useMemo(() => {
    if (severityFilter === 'All') return defects;
    return defects.filter((item) => item.severity === severityFilter);
  }, [defects, severityFilter]);

  const handleSetExecutionStatus = (id: string, status: ExecutionStatus) => {
    setExecutions((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const handleResetExecutions = () => {
    setExecutions(INITIAL_EXECUTIONS);
  };

  const handleAddCase = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newCaseTitle.trim();
    if (!trimmed) {
      setCaseError('Enter a short test case title to add it to the suite.');
      return;
    }
    const nextNum = 201 + testCases.length + Math.floor(Math.random() * 10);
    const created: DemoTestCase = {
      id: `TC-${nextNum}`,
      title: trimmed,
      suite: newCaseSuite,
      priority: newCasePriority,
    };
    setTestCases((prev) => [created, ...prev]);
    setNewCaseTitle('');
    setCaseError('');
  };

  const handleRemoveCase = (id: string) => {
    setTestCases((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAdvanceDefectStatus = (id: string) => {
    const nextStatusMap: Record<DefectStatus, DefectStatus> = {
      Open: 'In Review',
      'In Review': 'Verified',
      Verified: 'Open',
    };
    setDefects((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: nextStatusMap[item.status] } : item
      )
    );
  };

  const handleLogDefectFromExecution = (exec: DemoExecutionCase) => {
    const exists = defects.some((d) => d.linkedCase === exec.id);
    if (!exists) {
      const nextDefect: DemoDefect = {
        id: `BUG-${41 + defects.length}`,
        title: `Investigate failure in: ${exec.title}`,
        severity: 'High',
        status: 'Open',
        linkedCase: exec.id,
      };
      setDefects((prev) => [nextDefect, ...prev]);
    }
    setSeverityFilter('All');
    setActiveTab('defects');
  };

  return (
    <section
      id="demo"
      className="border-y border-[#E5E7EB]/80 bg-[#F8FAFF] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interactive Walkthrough"
          title="Experience the QA Workflow in Action."
          description="Select a workflow stage below to interact directly with execution tracking, test case structuring, and defect triage."
          align="center"
          accentColor="orange"
        />

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8"
        >
          {/* Left Rail: Interactive Module Selector Cards */}
          <div
            role="tablist"
            aria-label="Interactive QA workflow modules"
            className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1"
          >
            {DEMO_MODULES.map((mod) => {
              const Icon = mod.icon;
              const isActive = activeTab === mod.id;
              const isOrange = mod.accent === 'orange';

              return (
                <button
                  key={mod.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(mod.id)}
                  className={`group relative flex cursor-pointer items-start gap-4 overflow-hidden rounded-2xl border p-5 text-left transition-all duration-150 focus-visible:outline-2 focus-visible:outline-[#2563EB] ${
                    isActive
                      ? 'border-[#2563EB] bg-white shadow-[0_14px_30px_-14px_rgba(37,99,235,0.2)]'
                      : 'border-[#E5E7EB] bg-white/75 hover:border-[#2563EB]/35 hover:bg-white'
                  }`}
                >
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#F97316]"
                    />
                  )}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-150 group-hover:-rotate-3 ${
                      isActive
                        ? isOrange
                          ? 'bg-[#F97316] text-white'
                          : 'bg-[#2563EB] text-white'
                        : isOrange
                        ? 'bg-[#F97316]/12 text-[#F97316]'
                        : 'bg-[#2563EB]/10 text-[#2563EB]'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-[#111827]">
                      {mod.title}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-[#64748B] sm:text-sm">
                      {mod.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Stage: Interactive Demo Surface */}
          <div className="relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-[0_24px_60px_-20px_rgba(17,24,39,0.12)] lg:col-span-8">
            <div
              aria-hidden="true"
              className="h-1 w-full bg-gradient-to-r from-[#2563EB] via-[#2563EB] to-[#F97316]"
            />

            <div className="flex items-center justify-between border-b border-[#E5E7EB] bg-[#F8FAFF]/75 px-5 py-3.5 sm:px-7">
              <span className="font-display text-xs font-bold text-[#111827] sm:text-sm">
                {DEMO_MODULES.find((m) => m.id === activeTab)?.title}
              </span>
              <span className="text-xs font-medium text-[#64748B]">
                Release Candidate Preview
              </span>
            </div>

            {/* Module 1: Execution Runner */}
            {activeTab === 'execution' && (
              <motion.div
                key="execution"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="p-5 sm:p-7"
              >
                <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFF] p-5 sm:flex-row sm:items-center">
                  <div className="flex flex-wrap items-center gap-6">
                    <div>
                      <div className="text-xs font-medium text-[#64748B]">
                        Suite Pass Rate
                      </div>
                      <div className="mt-0.5 font-display text-2xl font-extrabold tabular-nums text-[#111827]">
                        {executionStats.passRate}%
                      </div>
                    </div>
                    <div className="h-8 w-px bg-[#E5E7EB]" aria-hidden="true" />
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold tabular-nums sm:text-sm">
                      <span className="text-[#2563EB]">
                        {executionStats.passed} Passed
                      </span>
                      <span className="text-[#F97316]">
                        {executionStats.failed} Failed
                      </span>
                      <span className="text-[#64748B]">
                        {executionStats.blocked} Blocked
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetExecutions}
                    className="inline-flex cursor-pointer items-center gap-1.5 self-start rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2 text-xs font-semibold text-[#111827] transition-colors hover:border-[#2563EB]/40 hover:text-[#2563EB] sm:self-auto"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Reset Run</span>
                  </button>
                </div>

                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#E5E7EB]/70">
                  <div className="flex h-full w-full">
                    <div
                      style={{
                        width: `${(executionStats.passed / executionStats.total) * 100}%`,
                      }}
                      className="bg-[#2563EB] transition-all duration-200"
                    />
                    <div
                      style={{
                        width: `${(executionStats.failed / executionStats.total) * 100}%`,
                      }}
                      className="bg-[#F97316] transition-all duration-200"
                    />
                    <div
                      style={{
                        width: `${(executionStats.blocked / executionStats.total) * 100}%`,
                      }}
                      className="bg-[#64748B]/45 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="mt-6 divide-y divide-[#E5E7EB] rounded-2xl border border-[#E5E7EB]">
                  {executions.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col justify-between gap-4 p-4 transition-colors hover:bg-[#F8FAFF]/60 sm:flex-row sm:items-center sm:px-5"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 text-xs text-[#64748B]">
                          <span className="font-semibold tabular-nums text-[#2563EB]">
                            {item.id}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{item.suite}</span>
                        </div>
                        <p className="mt-1 font-display text-sm font-semibold text-[#111827] sm:text-base">
                          {item.title}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() =>
                            handleSetExecutionStatus(item.id, 'Passed')
                          }
                          className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                            item.status === 'Passed'
                              ? 'bg-[#2563EB] text-white'
                              : 'border border-[#E5E7EB] bg-white text-[#64748B] hover:border-[#2563EB]/40 hover:text-[#2563EB]'
                          }`}
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Pass</span>
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            handleSetExecutionStatus(item.id, 'Failed')
                          }
                          className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                            item.status === 'Failed'
                              ? 'bg-[#F97316] text-white'
                              : 'border border-[#E5E7EB] bg-white text-[#64748B] hover:border-[#F97316]/50 hover:text-[#F97316]'
                          }`}
                        >
                          <XCircle className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Fail</span>
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            handleSetExecutionStatus(item.id, 'Blocked')
                          }
                          className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                            item.status === 'Blocked'
                              ? 'bg-[#111827] text-white'
                              : 'border border-[#E5E7EB] bg-white text-[#64748B] hover:border-[#111827]/35 hover:text-[#111827]'
                          }`}
                        >
                          <Ban className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Block</span>
                        </button>

                        {item.status === 'Failed' && (
                          <button
                            type="button"
                            onClick={() => handleLogDefectFromExecution(item)}
                            className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-[#F97316]/35 bg-[#F97316]/10 px-2.5 py-1.5 text-xs font-semibold text-[#F97316] transition-colors hover:bg-[#F97316]/15"
                          >
                            <Bug className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Log Defect</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Module 2: Test Case Builder */}
            {activeTab === 'cases' && (
              <motion.div
                key="cases"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="p-5 sm:p-7"
              >
                <form
                  onSubmit={handleAddCase}
                  className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFF] p-4 sm:p-5"
                  noValidate
                >
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
                    <div className="md:col-span-6">
                      <label htmlFor="demo-case-title" className="sr-only">
                        Test Case Title
                      </label>
                      <input
                        id="demo-case-title"
                        type="text"
                        value={newCaseTitle}
                        onChange={(e) => {
                          setNewCaseTitle(e.target.value);
                          if (caseError) setCaseError('');
                        }}
                        placeholder="Add a structured test case objective..."
                        className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#64748B]/70 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="demo-case-suite" className="sr-only">
                        Test Suite
                      </label>
                      <select
                        id="demo-case-suite"
                        value={newCaseSuite}
                        onChange={(e) => setNewCaseSuite(e.target.value)}
                        className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#111827] focus:border-[#2563EB] focus:outline-none"
                      >
                        <option value="Authentication">Authentication</option>
                        <option value="Project Setup">Project Setup</option>
                        <option value="Defect Workflow">Defect Workflow</option>
                        <option value="QA Analytics">QA Analytics</option>
                      </select>
                    </div>
                    <div className="flex gap-2 md:col-span-3">
                      <label htmlFor="demo-case-priority" className="sr-only">
                        Priority
                      </label>
                      <select
                        id="demo-case-priority"
                        value={newCasePriority}
                        onChange={(e) =>
                          setNewCasePriority(
                            e.target.value as 'High' | 'Medium' | 'Low'
                          )
                        }
                        className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#111827] focus:border-[#2563EB] focus:outline-none"
                      >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                      <button
                        type="submit"
                        className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8] whitespace-nowrap shrink-0"
                      >
                        <Plus className="h-4 w-4" aria-hidden="true" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                  {caseError && (
                    <p role="alert" className="mt-2 text-xs font-medium text-[#F97316]">
                      {caseError}
                    </p>
                  )}
                </form>

                <div className="mt-5 divide-y divide-[#E5E7EB] rounded-2xl border border-[#E5E7EB]">
                  {testCases.length === 0 ? (
                    <div className="p-8 text-center text-sm text-[#64748B]">
                      No test cases in this preview list. Add one above to see it structured here.
                    </div>
                  ) : (
                    testCases.map((tc) => (
                      <div
                        key={tc.id}
                        className="flex items-center justify-between gap-4 p-4 sm:px-5"
                      >
                        <div>
                          <div className="flex items-center gap-2 text-xs text-[#64748B]">
                            <span className="font-semibold tabular-nums text-[#2563EB]">
                              {tc.id}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{tc.suite}</span>
                            <span aria-hidden="true">·</span>
                            <span
                              className={
                                tc.priority === 'High'
                                  ? 'font-semibold text-[#F97316]'
                                  : 'text-[#64748B]'
                              }
                            >
                              {tc.priority} Priority
                            </span>
                          </div>
                          <p className="mt-1 font-display text-sm font-semibold text-[#111827] sm:text-base">
                            {tc.title}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleRemoveCase(tc.id)}
                          aria-label={`Remove ${tc.id}`}
                          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#E5E7EB] text-[#64748B] transition-colors hover:border-[#F97316]/40 hover:text-[#F97316]"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}

            {/* Module 3: Defect Triage */}
            {activeTab === 'defects' && (
              <motion.div
                key="defects"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="p-5 sm:p-7"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFF] p-1">
                    {(['All', 'Critical', 'High', 'Medium'] as const).map((sev) => (
                      <button
                        key={sev}
                        type="button"
                        onClick={() => setSeverityFilter(sev)}
                        className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                          severityFilter === sev
                            ? 'bg-white text-[#111827] shadow-xs'
                            : 'text-[#64748B] hover:text-[#111827]'
                        }`}
                      >
                        {sev}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-[#64748B]">
                    Click a defect status button to advance resolution.
                  </p>
                </div>

                <div className="mt-5 divide-y divide-[#E5E7EB] rounded-2xl border border-[#E5E7EB]">
                  {filteredDefects.map((defect) => (
                    <div
                      key={defect.id}
                      className="flex flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center sm:px-5"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-xs text-[#64748B]">
                          <span className="font-semibold tabular-nums text-[#F97316]">
                            {defect.id}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>Linked to {defect.linkedCase}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-medium text-[#111827]">
                            {defect.severity} Severity
                          </span>
                        </div>
                        <p className="mt-1 font-display text-sm font-semibold text-[#111827] sm:text-base">
                          {defect.title}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAdvanceDefectStatus(defect.id)}
                        className={`inline-flex cursor-pointer items-center justify-center rounded-xl px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                          defect.status === 'Verified'
                            ? 'bg-[#2563EB] text-white'
                            : defect.status === 'In Review'
                            ? 'border border-[#2563EB]/35 bg-[#F8FAFF] text-[#2563EB]'
                            : 'border border-[#F97316]/40 bg-[#F97316]/10 text-[#F97316]'
                        }`}
                      >
                        {defect.status} →
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
