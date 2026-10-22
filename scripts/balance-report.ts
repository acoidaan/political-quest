/**
 * Informe de balance del dataset: npm run balance
 */
import { demoQuestions, verifiedQuestions } from "../src/data/questions";
import { generateBalanceReport } from "../src/data/balance";
import { AXIS_IDS } from "../src/data/axes";

const pool = verifiedQuestions.length > 0 ? verifiedQuestions : demoQuestions;
const label = verifiedQuestions.length > 0 ? "VERIFICADO" : "DEMO";
const report = generateBalanceReport(pool);

console.log(`\n=== INFORME DE BALANCE — dataset ${label} ===\n`);
console.log(`Preguntas: ${report.totalQuestions} (demo: ${report.demoCount}, verificadas: ${report.verifiedCount})\n`);

console.log("Posiciones claras por partido:");
for (const [party, n] of Object.entries(report.partyPositionCounts).sort()) {
  const support = report.partySupportCounts[party] ?? 0;
  console.log(`  ${party.padEnd(8)} ${String(n).padStart(3)} posiciones (${support} favorables, ${n - support} contrarias)`);
}

console.log(`\nPolaridad de formulación: ${report.polarity.positive} positivas / ${report.polarity.negative} negativas`);

console.log("\nCobertura de ejes (|peso| ≥ 0.3):");
for (const axis of AXIS_IDS) {
  const bal = report.signedWeightBalance[axis];
  console.log(
    `  ${axis.padEnd(12)} ${String(report.axisCoverage[axis]).padStart(3)} preguntas  (balance firmado: ${bal >= 0 ? "+" : ""}${bal.toFixed(1)})`
  );
}

console.log("\nCobertura de categorías:");
const cats = Object.entries(report.categoryCoverage).sort((a, b) => b[1] - a[1]);
for (const [cat, n] of cats) console.log(`  ${cat.padEnd(20)} ${n}`);

console.log(`\nDiscriminación media: ${report.meanDiscrimination.toFixed(2)}`);
if (report.lowDiscriminationIds.length > 0) {
  console.log(`Preguntas con discriminación < 0.2: ${report.lowDiscriminationIds.join(", ")}`);
}

if (report.warnings.length > 0) {
  console.log("\n⚠ AVISOS:");
  for (const w of report.warnings) console.log(`  - ${w}`);
} else {
  console.log("\n✓ Sin avisos de desequilibrio.");
}
console.log("");
