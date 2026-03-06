import { Component } from '@angular/core';
import { Hero } from '../components/hero/hero';
import { Skills } from '../components/skills/skills';
import { Work } from '../components/work/work';
import { Testimonials } from '../components/testimonials/testimonials';
import { Contact } from '../components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, Skills, Work, Testimonials, Contact],
  templateUrl: './app-home.html',
  styleUrl: './app-home.scss',
})
export class AppHome {}
