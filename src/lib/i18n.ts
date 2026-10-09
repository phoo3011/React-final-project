import type { Category, ReportStatus, ReportType } from "@/lib/data";

export type Lang = "en" | "th";
export const LANG_COOKIE = "lang";
export const DEFAULT_LANG: Lang = "en";

export function parseLang(value: string | undefined): Lang {
  return value === "th" || value === "en" ? value : DEFAULT_LANG;
}

const en = {
  meta: {
    title: "CAMT Lost & Found",
    description: "A central board for lost and found items for the CAMT community",
  },
  nav: { items: "All posts", mine: "My posts", login: "Sign in", report: "+ New post", menu: "Menu", language: "Language" },
  home: {
    eyebrow: "CAMT COMMUNITY BOARD · 2026",
    title: "Lost something? You don't have to search alone.",
    lead: "A shared space for the CAMT community to look for lost items, return what they find, and take care of each other's belongings.",
    noteTitle: "Latest from the community",
    note: "Every post includes a location and verifiable contact details, so returning items is easier.",
    report: "+ New post",
    browse: "Browse all posts",
    justIn: "JUST IN",
    latest: "Latest posts",
    viewAll: "View all ›",
    ctaTitle: "Lost something, or found something that isn't yours?",
    ctaText: "Post it here so friends across CAMT can help bring it home.",
    ctaButton: "Post a new report",
    searchPlaceholder: "Search by item, location, or category",
    search: "Search",
  },
  items: {
    eyebrow: "THE BOARD",
    title: "All posts",
    lead: "Search for lost items and things your CAMT friends have found.",
    searchPlaceholder: "Search posts...",
    all: "All",
    empty: "No posts match your search.",
  },
  card: { details: "View details ›" },
  detail: {
    back: "‹ Back to all posts",
    location: "Location",
    posted: "Date posted",
    category: "Category",
    contact: "Contact",
    contactButton: "Contact poster",
  },
  mine: {
    eyebrow: "YOUR ACTIVITY",
    title: "My posts",
    lead: "Manage the posts you created and update their status when an item gets home.",
    loginPrompt: "Please sign in to see your posts.",
    login: "Sign in",
    count: (n: number) => `${n} ${n === 1 ? "post" : "posts"}`,
    newPost: "+ New post",
  },
  actions: {
    edit: "Edit",
    remove: "Delete",
    confirmRemove: "Delete this post?",
    statusFailed: "Couldn't change the status",
    removeFailed: "Couldn't delete the post",
  },
  report: {
    eyebrow: "NEW REPORT",
    title: "Tell us what happened",
    lead: "The more detail you give, the better the chance the item finds its owner.",
    editEyebrow: "EDIT REPORT",
    editTitle: "Edit post",
    editLead: "Update the details or status of this post.",
  },
  form: {
    type: "Post type",
    title: "Item name",
    titlePlaceholder: "e.g. Student ID card",
    category: "Category",
    location: "Location",
    locationPlaceholder: "e.g. CAMT library",
    date: "Date lost or found",
    image: "Item photo",
    imageHint: "JPG/PNG, up to 2MB",
    description: "Additional details",
    descriptionPlaceholder: "Color, model, distinguishing marks, or what's inside",
    contact: "Contact",
    contactPlaceholder: "LINE ID or phone number",
    submit: "Submit post",
    saving: "Saving...",
    save: "Save changes",
    imageTooBig: "Image must be 2MB or smaller",
    saveFailed: "Couldn't save the post",
  },
  login: {
    eyebrow: "ACCOUNT",
    loginTitle: "Sign in",
    registerTitle: "Create account",
    name: "Username",
    studentId: "Student ID",
    password: "Password",
    loginButton: "Sign in",
    registerButton: "Create account",
    toRegister: "No account yet? Sign up",
    toLogin: "Already have an account? Sign in",
    logout: "Sign out",
  },
  types: { lost: "Lost", found: "Found" },
  statuses: { searching: "Still looking", found: "Found", closed: "Closed" },
  categories: {
    "อุปกรณ์การเรียน": "Stationery & study gear",
    "อิเล็กทรอนิกส์": "Electronics",
    "บัตรและเอกสาร": "Cards & documents",
    "ของใช้ส่วนตัว": "Personal items",
  } as Record<Category, string>,
  footer: {
    tagline: "A small place that helps belongings get home.",
    posts: "Posts",
    newPost: "New post",
    account: "Account",
    about: "About",
    community: "CAMT Community Board",
    college: "College of Arts, Media and Technology",
    copy: "© 2026 CAMT Lost & Found · CAMT Community Board",
  },
  // Server and validation messages arrive in Thai; they are looked up here for display.
  messages: {
    "กรุณาระบุชื่อสิ่งของอย่างน้อย 2 ตัวอักษร": "Enter an item name of at least 2 characters",
    "กรุณาระบุสถานที่": "Enter a location",
    "กรุณาระบุวันที่": "Enter a date",
    "กรุณาใส่รายละเอียดอย่างน้อย 10 ตัวอักษร": "Enter details of at least 10 characters",
    "กรุณาระบุช่องทางติดต่อ": "Enter a way to contact you",
    "กรุณากรอกข้อมูลให้ครบ": "Please fill in all fields",
    "รหัสนักศึกษานี้ถูกใช้แล้ว": "This student ID is already registered",
    "รหัสนักศึกษาหรือรหัสผ่านไม่ถูกต้อง": "Incorrect student ID or password",
    "กรุณาเข้าสู่ระบบ": "Please sign in",
    "ข้อมูลไม่ถูกต้อง": "Invalid data",
    "ไม่พบประกาศหรือไม่มีสิทธิ์ลบ": "Post not found, or you don't have permission to delete it",
    "ไม่พบประกาศหรือไม่มีสิทธิ์แก้ไข": "Post not found, or you don't have permission to edit it",
  } as Record<string, string>,
};

export type Dictionary = typeof en;

const th: Dictionary = {
  meta: {
    title: "CAMT Lost & Found",
    description: "ศูนย์กลางประกาศของหายและของที่พบสำหรับชาว CAMT",
  },
  nav: { items: "ประกาศทั้งหมด", mine: "ประกาศของฉัน", login: "เข้าสู่ระบบ", report: "+ แจ้งประกาศ", menu: "เมนู", language: "ภาษา" },
  home: {
    eyebrow: "CAMT COMMUNITY BOARD · 2026",
    title: "ของหายไม่ใช่เรื่องที่ต้องหาอยู่คนเดียว",
    lead: "พื้นที่กลางสำหรับชาว CAMT ในการตามหาของหาย ส่งคืนของที่พบ และช่วยกันดูแลสิ่งของของเรา",
    noteTitle: "ประกาศล่าสุดจากชุมชน",
    note: "ทุกชิ้นมีรายละเอียดสถานที่และช่องทางติดต่อที่ตรวจสอบได้ เพื่อให้การส่งคืนง่ายขึ้น",
    report: "+ แจ้งประกาศ",
    browse: "ดูประกาศทั้งหมด",
    justIn: "JUST IN",
    latest: "ประกาศล่าสุด",
    viewAll: "ดูทั้งหมด ›",
    ctaTitle: "ทำของหาย หรือเจอของที่ไม่ใช่ของคุณ?",
    ctaText: "แจ้งประกาศไว้ที่นี่ เพื่อให้เพื่อน ๆ ใน CAMT ช่วยกันพาของกลับบ้าน",
    ctaButton: "แจ้งประกาศใหม่",
    searchPlaceholder: "ค้นหาชื่อสิ่งของ สถานที่ หรือหมวดหมู่",
    search: "ค้นหา",
  },
  items: {
    eyebrow: "THE BOARD",
    title: "ประกาศทั้งหมด",
    lead: "ค้นหาของหายและของที่เพื่อน ๆ ใน CAMT พบเจอ",
    searchPlaceholder: "ค้นหาประกาศ...",
    all: "ทั้งหมด",
    empty: "ไม่พบประกาศที่ตรงกับการค้นหา",
  },
  card: { details: "ดูรายละเอียด ›" },
  detail: {
    back: "‹ กลับไปที่ประกาศทั้งหมด",
    location: "สถานที่",
    posted: "วันที่ประกาศ",
    category: "หมวดหมู่",
    contact: "ติดต่อ",
    contactButton: "ติดต่อผู้ประกาศ",
  },
  mine: {
    eyebrow: "YOUR ACTIVITY",
    title: "ประกาศของฉัน",
    lead: "จัดการประกาศที่คุณสร้างไว้ และอัปเดตสถานะเมื่อของได้กลับบ้าน",
    loginPrompt: "กรุณาเข้าสู่ระบบเพื่อดูประกาศของคุณ",
    login: "เข้าสู่ระบบ",
    count: (n: number) => `${n} ประกาศ`,
    newPost: "+ แจ้งประกาศใหม่",
  },
  actions: {
    edit: "แก้ไข",
    remove: "ลบ",
    confirmRemove: "ต้องการลบประกาศนี้หรือไม่?",
    statusFailed: "เปลี่ยนสถานะไม่สำเร็จ",
    removeFailed: "ลบประกาศไม่สำเร็จ",
  },
  report: {
    eyebrow: "NEW REPORT",
    title: "ช่วยเล่าให้เรารู้",
    lead: "ยิ่งรายละเอียดชัดเท่าไร โอกาสที่ของจะกลับไปหาเจ้าของก็ยิ่งมากขึ้น",
    editEyebrow: "EDIT REPORT",
    editTitle: "แก้ไขประกาศ",
    editLead: "อัปเดตรายละเอียดหรือสถานะของประกาศนี้",
  },
  form: {
    type: "ประเภทประกาศ",
    title: "ชื่อสิ่งของ",
    titlePlaceholder: "เช่น บัตรนักศึกษา",
    category: "หมวดหมู่",
    location: "สถานที่",
    locationPlaceholder: "เช่น ห้องสมุด CAMT",
    date: "วันที่พบหรือหาย",
    image: "รูปภาพสิ่งของ",
    imageHint: "รองรับ JPG/PNG ขนาดไม่เกิน 2MB",
    description: "รายละเอียดเพิ่มเติม",
    descriptionPlaceholder: "สี รุ่น จุดสังเกต หรือสิ่งที่อยู่ภายใน",
    contact: "ช่องทางติดต่อ",
    contactPlaceholder: "LINE ID หรือเบอร์โทรศัพท์",
    submit: "ส่งประกาศ",
    saving: "กำลังบันทึก...",
    save: "บันทึกการแก้ไข",
    imageTooBig: "รูปภาพต้องมีขนาดไม่เกิน 2MB",
    saveFailed: "ไม่สามารถบันทึกประกาศได้",
  },
  login: {
    eyebrow: "ACCOUNT",
    loginTitle: "เข้าสู่ระบบ",
    registerTitle: "สร้างบัญชี",
    name: "ชื่อผู้ใช้",
    studentId: "รหัสนักศึกษา",
    password: "รหัสผ่าน",
    loginButton: "เข้าสู่ระบบ",
    registerButton: "สมัครบัญชี",
    toRegister: "ยังไม่มีบัญชี? สมัครใช้งาน",
    toLogin: "มีบัญชีแล้ว? เข้าสู่ระบบ",
    logout: "ออกจากระบบ",
  },
  types: { lost: "ของหาย", found: "ของที่พบ" },
  statuses: { searching: "ตามหาอยู่", found: "พบแล้ว", closed: "ปิดประกาศ" },
  categories: {
    "อุปกรณ์การเรียน": "อุปกรณ์การเรียน",
    "อิเล็กทรอนิกส์": "อิเล็กทรอนิกส์",
    "บัตรและเอกสาร": "บัตรและเอกสาร",
    "ของใช้ส่วนตัว": "ของใช้ส่วนตัว",
  },
  footer: {
    tagline: "พื้นที่เล็ก ๆ ที่ทำให้ของกลับบ้าน",
    posts: "ประกาศ",
    newPost: "แจ้งประกาศใหม่",
    account: "บัญชี",
    about: "เกี่ยวกับ",
    community: "CAMT Community Board",
    college: "วิทยาลัยศิลปะ สื่อ และเทคโนโลยี",
    copy: "© 2026 CAMT Lost & Found · CAMT Community Board",
  },
  messages: {},
};

const dictionaries: Record<Lang, Dictionary> = { en, th };
export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Display text for a stored report type (the stored value stays Thai). */
export function typeLabel(d: Dictionary, type: ReportType) {
  return type === "ของที่พบ" ? d.types.found : d.types.lost;
}

export function statusLabel(d: Dictionary, status: ReportStatus) {
  if (status === "พบแล้ว") return d.statuses.found;
  if (status === "ปิดประกาศ") return d.statuses.closed;
  return d.statuses.searching;
}

export function categoryLabel(d: Dictionary, category: string) {
  return d.categories[category as Category] ?? category;
}

/** Translate a Thai server/validation message when a translation exists. */
export function message(d: Dictionary, text: string) {
  return d.messages[text] ?? text;
}

const thMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
const enMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Report dates are stored either as YYYY-MM-DD or as "28 ก.ย. 2026"; show both in the active language. */
export function formatDate(value: string, lang: Lang) {
  const months = lang === "th" ? thMonths : enMonths;
  const iso = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return `${Number(iso[3])} ${months[Number(iso[2]) - 1]} ${iso[1]}`;
  const thai = value.match(/^(\d{1,2})\s+(\S+)\s+(\d{4})$/);
  const month = thai ? thMonths.indexOf(thai[2]) : -1;
  if (thai && month >= 0) return `${thai[1]} ${months[month]} ${thai[3]}`;
  return value;
}
