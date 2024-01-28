import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperObject } from 'swiper';
import { FreeMode, Thumbs, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import styles from './Process.module.css';

interface ItemProcess {
    title: string;
    content: string;
    image: string;
}

interface Props {
    process: ItemProcess[];
}

export const processData: Props = {
    process: [
        {
            title: "Análisis y Planificación",
            content: "En esta etapa inicial, nos sumergimos en tus objetivos comerciales y requisitos específicos para definir la estructura del sitio web. Realizamos un análisis de la competencia para identificar oportunidades y establecer la arquitectura que brindará una experiencia de usuario coherente.",
            image: "/images/service1.jpg"
        },
        {
            title: "Diseño UI/UX",
            content: "En esta etapa inicial, nos sumergimos en tus objetivos comerciales y requisitos específicos para definir la estructura del sitio web. Realizamos un análisis de la competencia para identificar oportunidades y establecer la arquitectura que brindará una experiencia de usuario coherente.",
            image: "/images/service2.jpg"
        },
        {
            title: "Desarrollo Técnico",
            content: "En esta etapa inicial, nos sumergimos en tus objetivos comerciales y requisitos específicos para definir la estructura del sitio web. Realizamos un análisis de la competencia para identificar oportunidades y establecer la arquitectura que brindará una experiencia de usuario coherente.",
            image: "/images/service1.jpg"
        },
        {
            title: "Contenido y Pruebas",
            content: "En esta etapa inicial, nos sumergimos en tus objetivos comerciales y requisitos específicos para definir la estructura del sitio web. Realizamos un análisis de la competencia para identificar oportunidades y establecer la arquitectura que brindará una experiencia de usuario coherente.",
            image: "/images/service2.jpg"
        },
        {
            title: "Lanzamiento y Mantenimiento",
            content: "En esta etapa inicial, nos sumergimos en tus objetivos comerciales y requisitos específicos para definir la estructura del sitio web. Realizamos un análisis de la competencia para identificar oportunidades y establecer la arquitectura que brindará una experiencia de usuario coherente.",
            image: "/images/service1.jpg"
        }
    ]
}

export const Process = () => {

    const [ processList, setProcessList ] = useState<SwiperObject>();
    
    return (
        <section className="process animate-fade-up animate-duration-1000 animate-delay-300 animate-ease-in-out animate-fill-both">
            <div className="main">
                <div className={ styles.list }>
                    <span>El proceso</span>
                    <h2 className={ styles.title }>Desde el Análisis Estratégico hasta la Excelencia Digital</h2>                    
                    <Swiper
                        onSwiper={ setProcessList }
                        spaceBetween={ 10 }
                        slidesPerView={ 5 }
                        modules={[ Thumbs ]}
                    >
                        {
                            processData.process.map( ( itemProcess, index ) => {
                                return (
                                    <SwiperSlide key={ index }>
                                        { index + 1 }. { itemProcess.title }
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
            <div className="content">                
                <Swiper
                    spaceBetween={0}
                    navigation={false}
                    thumbs={{ swiper: processList }}
                    modules={[ FreeMode, Thumbs, EffectFade ]}
                    effect= 'fade'
                    fadeEffect={{ crossFade: true }}
                >
                    {
                        processData.process.map( ( itemProcess, index ) => {
                            return (
                                <SwiperSlide key={ index }>
                                    <div className="caption">
                                        <div className={ styles.caption__wrapper }>
                                            <div className={ styles.caption__icon }>
                                                <img src="/images/icon-1.png"/>
                                            </div>
                                            <div className={ styles.caption__content }>
                                                <h2 className={ styles.caption__title }>{ itemProcess.title }</h2>
                                                <p>{ itemProcess.content }</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={ styles.image }>
                                        <img src={ itemProcess.image }/>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}