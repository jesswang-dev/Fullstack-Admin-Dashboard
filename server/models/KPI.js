import mongoose from "mongoose";

const monthSchema = new mongoose.Schema(
  {
    month: String,
    revenue: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    expenses: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    operationalExpenses: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    nonOperationalExpenses: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
  },
  {
    toJSON: { setters: true, getters: true },
  }
);

const daySchema = new mongoose.Schema(
  {
    date: String,
    revenue: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    expenses: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
  },
  {
    toJSON: { setters: true, getters: true },
  }
);

const KPISchema = new mongoose.Schema(
  {
    totalProfit: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    totalRevenue: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    totalExpenses: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: Number,
        get: (v) => (v / 100).toFixed(2),
        set: (v) => v * 100,
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  {
    timestamps: true,
    toJSON: { setters: true, getters: true },
  }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;