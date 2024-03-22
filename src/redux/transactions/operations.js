import { createAsyncThunk } from '@reduxjs/toolkit';

import { walletApi } from '../../axiosConfig/walletApi';

export const fetchTransactionsDataThunk = createAsyncThunk(
  'fetchTransactionsData',
  async (_, thunkAPI) => {
    try {
      const { data } = await walletApi.get('transactions');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'deleteTransaction',
  async (id, thunkAPI) => {
    try {
      await walletApi.delete(`transactions/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  'addTransaction',
  async (body, thunkAPI) => {
    try {
      const { data } = await walletApi.post('transactions', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTransactionThunk = createAsyncThunk(
  'editTransaction',
  async (body, thunkAPI) => {
    try {
      const { data } = await walletApi.patch(`/transactions/${body.id}`, body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTransactionCategoriesThunk = createAsyncThunk(
  'fetchTransactionCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await walletApi.get('transaction-categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTransactionSummaryControllerThunk = createAsyncThunk(
  'fetchTransactionSummaryController',
  async (_, thunkAPI) => {
    try {
      const { data } = await walletApi.get('transactions-summary');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
