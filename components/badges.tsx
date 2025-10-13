"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Award } from "lucide-react";
import { useEffect } from "react";
import { Button } from "./ui/button";

const Badges = () => {
  useEffect(() => {
    // Load Credly embed script
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="badges" className="section-padding">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold gradient-text">Certifications & Badges</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise in technology and cybersecurity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover h-full">
              <CardHeader>
                <CardTitle className="text-center text-xl">Credly Badge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center items-center min-h-[300px]">
                  <div 
                    data-iframe-width="150" 
                    data-iframe-height="270" 
                    data-share-badge-id="2ed384bf-e7b2-433a-85e9-469951fbb4ad" 
                    data-share-badge-host="https://www.credly.com"
                    className="credly-badge"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover h-full">
              <CardHeader>
                <CardTitle className="text-center text-xl">edX Certificate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center min-h-[300px] space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full flex items-center justify-center">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">Professional Certificate</h3>
                    <p className="text-muted-foreground mb-4">Verified achievement from edX</p>
                    <Button asChild variant="outline">
                      <a 
                        href="https://courses.edx.org/certificates/042abddd57a647b3a407595b752ac2a5?_gl=1*1n1kz1l*_gcl_au*MTkzMzU3NTA2NC4xNzUzNjY4MzA0*_ga*MTI0NjkwNDk1OS4xNzUzNjY4MzA1*_ga_D3KS4KMDT0*czE3NjAwMDI0NDgkbzIkZzEkdDE3NjAwMDI0ODgkajIwJGwwJGgw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        View Certificate
                        <Award className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Badges;