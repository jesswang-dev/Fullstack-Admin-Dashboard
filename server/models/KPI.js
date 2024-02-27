import mongoose from "mongoose";

const KPISchema = new mongoose.Schema({
    totalProfit: {type: Number},
    totalRevenue: {type: Number},
    totalExpenses: {type: Number},

});