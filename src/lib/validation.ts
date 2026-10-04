import { z } from "zod";
import { categories } from "@/lib/data";

export const reportSchema = z.object({
  title: z.string().trim().min(2, "กรุณาระบุชื่อสิ่งของอย่างน้อย 2 ตัวอักษร"),
  type: z.enum(["ของหาย", "ของที่พบ"]),
  category: z.enum(categories),
  location: z.string().trim().min(2, "กรุณาระบุสถานที่"),
  date: z.string().min(1, "กรุณาระบุวันที่"),
  description: z.string().trim().min(10, "กรุณาใส่รายละเอียดอย่างน้อย 10 ตัวอักษร"),
  contact: z.string().trim().min(3, "กรุณาระบุช่องทางติดต่อ"),
  emoji: z.string().min(1),
  image: z.string().optional(),
});

export const reportUpdateSchema = reportSchema.partial().extend({ status: z.enum(["ตามหาอยู่", "พบแล้ว", "ปิดประกาศ"]).optional() });
export type ReportFormValues = z.infer<typeof reportSchema>;