import { expect, test } from 'vitest';
import { formatRelativeDateFromNow, parseThaiDate } from './date';

test('parseThaiDate correctly parses Thai date strings', () => {
    const date = parseThaiDate('15 สิงหาคม 2566');
    expect(date.getFullYear()).toBe(2023);
    expect(date.getMonth()).toBe(7); // August is month 7 (0-indexed)
    expect(date.getDate()).toBe(15);
});

test('parseThaiDate handles different months', () => {
    const date = parseThaiDate('1 มกราคม 2565');
    expect(date.getFullYear()).toBe(2022);
    expect(date.getMonth()).toBe(0); // January is month 0 (0-indexed)
    expect(date.getDate()).toBe(1);
});

test('parseThaiDate handles invalid month gracefully', () => {
    const date = parseThaiDate('10 InvalidMonth 2565');
    expect(date.getFullYear()).toBe(2022);
    expect(date.getMonth()).toBe(0); // Defaults to January
    expect(date.getDate()).toBe(10);
});

test('parseThaiDate handles edge case of year conversion', () => {
    const date = parseThaiDate('31 ธันวาคม 2543');
    expect(date.getFullYear()).toBe(2000);
    expect(date.getMonth()).toBe(11); // December is month 11 (0-indexed)
    expect(date.getDate()).toBe(31);
});

test('parseThaiDate handles single digit days', () => {
    const date = parseThaiDate('5 มีนาคม 2564');
    expect(date.getFullYear()).toBe(2021);
    expect(date.getMonth()).toBe(2); // March is month 2 (0-indexed)
    expect(date.getDate()).toBe(5);
});

test('parseThaiDate handles leading/trailing spaces', () => {
    const date = parseThaiDate('  20 พฤษภาคม 2562  ');
    expect(date.getFullYear()).toBe(2019);
    expect(date.getMonth()).toBe(4); // May is month 4 (0-indexed)
    expect(date.getDate()).toBe(20);
});

test('parseThaiDate handles invalid date format', () => {
    const date = parseThaiDate('Invalid Date String');
    expect(date.getFullYear()).toBe(NaN);
    expect(date.getMonth()).toBe(NaN);
    expect(date.getDate()).toBe(NaN);
});

test("formatRelativeDateFromNow with today's date", () => {
    const today = new Date();
    const result = formatRelativeDateFromNow(today);
    expect(result).toBe('วันนี้');
});

test("formatRelativeDateFromNow with yesterday's date", () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const result = formatRelativeDateFromNow(yesterday);
    expect(result).toBe('เมื่อวานนี้');
});

test('formatRelativeDateFromNow with date 5 days ago', () => {
    const fiveDaysAgo = new Date();
    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);
    const result = formatRelativeDateFromNow(fiveDaysAgo);
    expect(result).toBe('5 วันที่ผ่านมา');
});

test('formatRelativeDateFromNow with date 30 days ago', () => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const result = formatRelativeDateFromNow(thirtyDaysAgo);
    expect(result).toBe('30 วันที่ผ่านมา');
});

test('formatRelativeDateFromNow with date 365 days ago', () => {
    const oneYearAgo = new Date();
    oneYearAgo.setDate(oneYearAgo.getDate() - 365);
    const result = formatRelativeDateFromNow(oneYearAgo);
    expect(result).toBe('365 วันที่ผ่านมา');
});

test('formatRelativeDateFromNow with date 1000 days ago', () => {
    const thousandDaysAgo = new Date();
    thousandDaysAgo.setDate(thousandDaysAgo.getDate() - 1000);
    const result = formatRelativeDateFromNow(thousandDaysAgo);
    expect(result).toBe('1000 วันที่ผ่านมา');
});

test('formatRelativeDateFromNow with date 1 day in the future', () => {
    const oneDayFuture = new Date();
    oneDayFuture.setDate(oneDayFuture.getDate() + 1);
    const result = formatRelativeDateFromNow(oneDayFuture);
    expect(result).toBe('วันพรุ่งนี้');
});

test('formatRelativeDateFromNow with date 10 days in the future', () => {
    const tenDaysFuture = new Date();
    tenDaysFuture.setDate(tenDaysFuture.getDate() + 10);
    const result = formatRelativeDateFromNow(tenDaysFuture);
    expect(result).toBe('10 วันข้างหน้า');
});

test('formatRelativeDateFromNow with invalidDate', () => {
    const invalidDate = new Date('invalid-date-string');
    const result = formatRelativeDateFromNow(invalidDate);
    expect(result).toBe('วันที่ไม่ถูกต้อง');
});
