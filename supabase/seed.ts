import { createClient } from '@supabase/supabase-js';
import seed from './seed.json' with { type: 'json' };

const url = process.env.PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('Set PUBLIC_SUPABASE_URL or SUPABASE_URL, and SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_ANON_KEY while logged in as admin).');
  process.exit(1);
}

const supabase = createClient(url, key);

async function run() {
  const { error: homeError } = await supabase.from('homes').upsert(seed.homes, { onConflict: 'slug' });
  if (homeError) {
    console.error('Error seeding homes:', homeError);
    process.exit(1);
  }
  const { error: caseError } = await supabase.from('cases').upsert(seed.cases, { onConflict: 'slug' });
  if (caseError) {
    console.error('Error seeding cases:', caseError);
    process.exit(1);
  }
  console.log(`Seeded ${seed.homes.length} homes and ${seed.cases.length} cases.`);
}

run();
