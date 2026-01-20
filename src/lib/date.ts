export function parseThaiDate(str: string): Date {
    const thaiMonths: Record<string, number> = {
        มกราคม: 0,
        กุมภาพันธ์: 1,
        มีนาคม: 2,
        เมษายน: 3,
        พฤษภาคม: 4,
        มิถุนายน: 5,
        กรกฎาคม: 6,
        สิงหาคม: 7,
        กันยายน: 8,
        ตุลาคม: 9,
        พฤศจิกายน: 10,
        ธันวาคม: 11
    };

    const [day, monthStr, yearBE] = str.trim().split(' ');
    const yearCE = Number(yearBE) - 543;

    return new Date(yearCE, thaiMonths[monthStr] || 0, Number(day));
}

export function formatRelativeDateFromNow(d: Date): string {
    const now = new Date();
    const diffTime = now.getTime() - d.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (isNaN(diffDays)) return 'วันที่ไม่ถูกต้อง';
    if (diffDays === -1) return 'วันพรุ่งนี้';
    if (diffDays === 0) return 'วันนี้';
    if (diffDays === 1) return 'เมื่อวานนี้';
    return diffDays > 0 ? `${diffDays} วันที่ผ่านมา` : `${-diffDays} วันข้างหน้า`;
}

export function formatThaiDateToRelative(str: string): string {
    return formatRelativeDateFromNow(parseThaiDate(str));
}
