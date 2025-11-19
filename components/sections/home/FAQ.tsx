"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { openDemoForm } from "@/lib/demo-form";

const faqs = [
    {
        id: "1",
        question: "¿Es difícil de configurar?",
        answer: "Para nada. Nuestro equipo configura tu cuenta en 48 horas con plantillas pre-diseñadas para tu industria. Tú solo te enfocas en tu negocio mientras nosotros nos encargamos de la tecnología.",
    },
    {
        id: "2",
        question: "¿Qué pasa con mis datos actuales?",
        answer: "Migramos todos tus contactos, citas y datos existentes sin costo adicional. Tu información está segura y encriptada con los más altos estándares de seguridad.",
    },
    {
        id: "3",
        question: "¿Puedo cancelar cuando quiera?",
        answer: "Sí, no hay contratos forzosos. Puedes cancelar en cualquier momento sin penalizaciones. Estamos tan seguros de que te encantará ClicUp que no necesitamos atarte con contratos.",
    },
    {
        id: "4",
        question: "¿Necesito conocimientos técnicos?",
        answer: "No. ClicUp está diseñado para dueños de negocios, no para programadores. Todo es intuitivo y nuestro equipo de soporte en español está disponible para ayudarte cuando lo necesites.",
    },
    {
        id: "5",
        question: "¿Cuánto tiempo toma ver resultados?",
        answer: "La mayoría de nuestros clientes ven un aumento en citas agendadas y reseñas en las primeras 2 semanas. Los resultados completos (más clientes, menos no-shows) se notan en el primer mes.",
    },
    {
        id: "6",
        question: "¿Qué incluye el soporte?",
        answer: "Soporte completo en español por chat, email y teléfono. Además, tenemos una biblioteca de tutoriales en video y un equipo dedicado para ayudarte a optimizar tus campañas.",
    },
];

export function FAQ() {
    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4"
                    >
                        Preguntas Frecuentes
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Respuestas a las preguntas más comunes sobre ClicUp.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq) => (
                            <AccordionItem
                                key={faq.id}
                                value={faq.id}
                                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
                            >
                                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 p-8 bg-primary/5 border border-primary/20 rounded-lg max-w-3xl mx-auto"
                >
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                        ¿Listo para Transformar tu Negocio?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                        Únete a los 500+ negocios hispanos que ya están creciendo con ClicUp.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="h-12 px-8 text-base font-semibold group" onClick={openDemoForm}>
                            Empezar Prueba Gratis
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold" onClick={openDemoForm}>
                            Agendar Demo
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

