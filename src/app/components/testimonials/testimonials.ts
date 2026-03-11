import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials = signal([
    {
      quote:
        'Angel did a great job helping us with the first stage of a project we were in a hurry to deliver. Will definitely work with him again in the future!! 100% recommended :)',
      name: 'Upwork Contractor',
      company: 'Upwork',
      initials: 'UC',
    },
    {
      quote: `Great to work with him again. It was an amazing experience on this project as weve faced few challenges but still able to make it through. Thanks again for his support until the end`,
      name: 'Upwork Contractor',
      company: 'Upwork',
      initials: 'UC',
    },
    {
      quote: `Angel is a great freelancer; he was highly attentive of the requirements and he was willing to make the necessary changes. I will be working with him for my sites.`,
      name: 'Upwork Contractor',
      company: 'Upwork',
      initials: 'UC',
    },
    {
      quote: `Contraté a Angel para el proyecto de Fluvip y puedo dar mi constancia de que es una persona totalmente responsable.
      No hay que darle muchos detalles para que ejecute las tareas y si no lo tiene claro pregunta sin penas.
      Trabajó con nosotros con Angular y tanto mi feedback como el de todo el entorno que compartí lo consideramos un experto total. 
      Cualquier empresa puede estar tranquila que con Angel tendrá a un creador de soluciones nato.
      `,
      name: 'Jose Martonaro',
      company: 'FLUVIP',
      initials: 'JM',
    },
    {
      quote:
        'Trabajé con Angel y puedo decir que es una persona confiable y resolutiva. Suele entender rápido el contexto, hacer buenas preguntas y proponer soluciones prácticas cuando hay ambigüedad. Mantiene un buen nivel de orden en el código y cuidado en los detalles, recibe feedback sin problema y cumple con lo acordado. Lo recomiendo para equipos que valoren colaboración, autonomía y ejecución sólida.',
      name: 'Nelson Caicedo',
      company: 'Fluvip',
      initials: 'NS',
    },
    {
      quote:
        'Tuve el privilegio de trabajar con Angel en el equipo de desarollo de software en Intelenz durante más de dos años. Angel es un compañero proactivo, orientado a resultados, responsable y técnicamente sólido, y siempre está dispuesto a poner toda su energía y tiempo para hacer el trabajo. Sabe como ayudar a sus compañeros y sacar lo mejor de ellos. Y además tiene una habilidad analítica y de resolución de problemas excepcional en tecnologías web. Angel es un gran activo para cualquier empresa.',
      name: 'Omar Malave',
      company: 'Intelenz',
      initials: 'OM',
    },
  ]);
}
