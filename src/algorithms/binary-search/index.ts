import case_1 from "./cases/case_1";
import algorithm from "./algorithm";
import { BenchmarkRunner } from "../../utils/BenchmarkRunner";

const cases = [case_1];

new BenchmarkRunner(algorithm).run(cases);
