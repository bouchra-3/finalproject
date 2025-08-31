import { useMemo } from "react";

export default function Filters({ products, category, setCategory, sort, setSort }) {
  const categories = useMemo(() => {
    const s = new Set(products.map(p => p.category));
    return ["Tous", ...Array.from(s)];
  }, [products]);

  return (
    <div className="filters">
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="default">Pertinence</option>
        <option value="price-asc">Prix ↑</option>
        <option value="price-desc">Prix ↓</option>
      </select>
    </div>
  );
}
