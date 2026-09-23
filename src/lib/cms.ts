import { getSupabase } from './supabase';
import { homeData, caseData } from '../data/siteData';
import type { Home, Case } from '../types/cms';

function staticHomes(): Home[] {
  return Object.entries(homeData).map(([slug, h], i) => ({
    id: slug,
    slug,
    title: h.title,
    subtitle: h.subtitle,
    hero_image: h.heroImage,
    hero_alt: h.heroAlt,
    luas: h.luas,
    kamar: h.kamar,
    mandi: h.mandi,
    harga: h.harga,
    gallery: h.gallery,
    category: slug === 'horizon' || slug === 'cube' ? 'modern' : slug === 'zen' || slug === 'loft' ? 'minimalist' : slug === 'oasis' ? 'villa' : 'tropical',
    order_index: i,
    created_at: ''
  }));
}

function staticCases(): Case[] {
  const regions: Record<string, string> = {
    alpine: 'Residential • Switzerland',
    coastal: 'Residential • Bali',
    techhub: 'Commercial • Jakarta',
    loftcase: 'Interior • Singapore'
  };
  const categories: Record<string, string> = {
    alpine: 'residential',
    coastal: 'residential',
    techhub: 'commercial',
    loftcase: 'interior'
  };
  return Object.entries(caseData).map(([slug, c], i) => ({
    id: slug,
    slug,
    title: c.title,
    description: c.description,
    before_image: c.beforeImage,
    before_alt: c.beforeAlt,
    after_image: c.afterImage,
    after_alt: c.afterAlt,
    durasi: c.durasi,
    luas: c.luas,
    budget: c.budget,
    quote: c.quote,
    quote_author: c.quoteAuthor,
    category: categories[slug] || 'residential',
    region: regions[slug] || '',
    order_index: i,
    created_at: ''
  }));
}

export async function getHomes(): Promise<Home[]> {
  const client = getSupabase();
  if (!client) return staticHomes();
  try {
    const { data, error } = await client.from('homes').select('*').order('order_index');
    if (error || !data || data.length === 0) throw error ?? new Error('empty');
    return data as Home[];
  } catch {
    return staticHomes();
  }
}

export async function getCases(): Promise<Case[]> {
  const client = getSupabase();
  if (!client) return staticCases();
  try {
    const { data, error } = await client.from('cases').select('*').order('order_index');
    if (error || !data || data.length === 0) throw error ?? new Error('empty');
    return data as Case[];
  } catch {
    return staticCases();
  }
}
