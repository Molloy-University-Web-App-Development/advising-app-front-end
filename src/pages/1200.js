import { Link } from "react-router-dom";

export default function FunctionalProgrammingI() {
  return (
    <>
      <h1>CSC 1200 Functional Programming I</h1>
      <p>(formerly CSC 120; CSC 111)</p>
      <p class="summary">
        This course provides an accelerated introduction to computer programming
        in scripting language, such as JavaScript, Python or Ruby using a
        functional programming style. The emphasis of the course will be on
        developing logical and algorithmic problem solving skills. Students will
        learn how to state problems precisely and reason about the correctness
        of their code. Topics include function composition, basic string
        processing, Booleans and truth tables, conditional statements, loops
        implemented by backward and forward tail recursion, Arrays and
        higher-order functions. Students will apply their knowledge to the
        partial development of an open source project, such as a spreadsheet web
        application.
      </p>
      <h2 id="credit">Credits</h2>3<h2>Prerequisite</h2>
      SAT mathematics score of at least 540, CIS 1030/CSC 1030 or approval from
      the Chairperson
      <h2>Distribution</h2>
      Mathematics/Computer Studies
      <h2>Offered</h2>
      Fall
      <br />
      <br />
      <Link to="../">Go Back</Link>
    </>
  );
}
