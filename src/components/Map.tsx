"use client";

export default function Map() {
  return (
    <section className="h-[400px] w-full mt-auto">
      <iframe 
        src="https://maps.google.com/maps?q=Avenue%20Tarik%20Ibn%20Ziad%20residence%20al%20rayhane%20Temara&t=&z=15&ie=UTF8&iwloc=&output=embed" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Boutique Location"
        className="grayscale opacity-90 contrast-125"
      ></iframe>
    </section>
  );
}
