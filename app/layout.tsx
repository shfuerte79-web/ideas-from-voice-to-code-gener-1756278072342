import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '```json
[
  {
    "title": "Voice-Driven API Builder",
    "description": "أداة تتيح للمستخدمين إنشاء واجهات برمجة التطبيقات (APIs) باستخدام الأوامر الصوتية، مما يسهل على المطورين غير المتمرسين بناء APIs بسرعة.",
    "mvp_plan": "استخدام مكتبة التعرف على الصوت لتحويل الأوامر الصوتية إلى أوامر برمجية لإنشاء API. إعداد واجهة بسيطة لتلقي الأوامر الصوتية وتوليد الكود. اختبار الوظائف الأساسية مع مجموعة محدودة من الأوامر."
  },
  {
    "title": "Voice-Activated Code Review Assistant",
    "description": "أداة تساعد المطورين في مراجعة الشيفرة المصدرية باستخدام الأوامر الصوتية، مما يسهل عليهم تقديم الملاحظات والتعديلات بسرعة.",
    "mvp_plan": "تطوير نموذج أولي يقوم بتحليل الشيفرة المصدرية المستلمة عبر الأوامر الصوتية، وتوليد ملاحظات أو اقتراحات لتحسين الكود. استخدام مكتبة التعرف على الصوت لتسهيل التفاعل."
  },
  {
    "title": "Voice-to-Documentation Generator",
    "description": "أداة تقوم بتحويل الأوامر الصوتية إلى وثائق تقنية، مما يسهل على المطورين إنشاء وثائق لمشاريعهم بسرعة ودون الحاجة للكتابة.",
    "mvp_plan": "إنشاء واجهة صوتية بسيطة تأخذ الأوامر الصوتية وتقوم بتحويلها إلى نصوص وثائقية. استخدام نموذج ذكاء اصطناعي لتحسين جودة الوثائق. اختبار الوظيفة مع مجموعة من المستخدمين للحصول على تعليقات."
  }
]
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}