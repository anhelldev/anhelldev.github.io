import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials = [
    {
      quote: 'Working with this designer was a game changer. The brand identity exceeded every expectation.',
      name: 'Sarah Chen',
      company: 'Google',
      initials: 'SC',
    },
    {
      quote: 'Incredibly talented and a joy to work with. Delivered pixel-perfect designs ahead of schedule.',
      name: 'Marcus Reed',
      company: 'Stripe',
      initials: 'MR',
    },
    {
      quote: 'Our product conversion improved significantly after the redesign. Highly recommended.',
      name: 'Priya Nair',
      company: 'Shopify',
      initials: 'PN',
    },
    {
      quote: 'A true creative partner who understands both design principles and business goals.',
      name: 'James Okafor',
      company: 'Meta',
      initials: 'JO',
    },
    {
      quote: 'The design system they built saved our team months of work. Exceptional quality.',
      name: 'Lena Schmidt',
      company: 'Figma',
      initials: 'LS',
    },
    {
      quote: 'Transformed our visual identity in a way that truly speaks to our audience. Brilliant work.',
      name: 'Tom Alvarez',
      company: 'Airbnb',
      initials: 'TA',
    },
  ];
}
