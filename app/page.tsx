export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: Voice-to-Code Generator
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
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
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}