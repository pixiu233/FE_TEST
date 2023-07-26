export async function getRadialProgressList() {
  const res = await fetch(`/api/radialProgressData`);
  return res.json();
}

export async function getMikestonesList(key: number) {
  const res = await fetch(`api/mikes`);
  return res.json();
}
