"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "María González",
        business: "Salón Elegancia",
        industry: "Salón de Belleza",
        location: "Miami, FL",
        quote: "Desde que uso ClicUp, he visto un cambio real en mi negocio. Tengo más clientes nuevos y las cancelaciones bajaron muchísimo gracias a los recordatorios automáticos. Vale cada centavo.",
        metrics: "+28% clientes, -40% no-shows",
        rating: 5,
    },
    {
        id: 2,
        name: "Carlos Ramírez",
        business: "Gimnasio PowerFit",
        industry: "Fitness",
        location: "Houston, TX",
        quote: "Los seguimientos automáticos me ahorran como 8 horas cada semana. Ahora puedo enfocarme en entrenar a mis clientes en lugar de estar persiguiendo leads todo el día.",
        metrics: "8 horas/semana ahorradas",
        rating: 5,
    },
    {
        id: 3,
        name: "Dr. Ana Martínez",
        business: "Clínica Dental Pro",
        industry: "Odontología",
        location: "Los Angeles, CA",
        quote: "En 6 meses pasamos de tener apenas 10 reseñas a más de 85. La diferencia en nuestra reputación online ha sido increíble y ahora más pacientes nos encuentran.",
        metrics: "+85 reseñas en 6 meses",
        rating: 5,
    },
];

export function Testimonials() {
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
                        Resultados Reales de Negocios Como el Tuyo
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        No solo palabras bonitas. Estos son los resultados que nuestros clientes están logrando.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card border border-border rounded-lg p-6 relative"
                        >
                            <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>

                            <p className="text-foreground mb-6 leading-relaxed italic">
                                "{testimonial.quote}"
                            </p>

                            <div className="pt-4 border-t border-border">
                                <p className="font-semibold text-foreground">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.business} • {testimonial.industry}</p>
                                <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                                <p className="text-sm font-semibold text-primary mt-2">{testimonial.metrics}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

