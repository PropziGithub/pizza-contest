import React from "react";

export default function Rules() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className="bg-primary-light  p-10 mb-10">
        <div className="max-w-2xl mx-auto text-center font-semibold text-[#FFFFFF]">
          <h3>
            Rules & Regulations for Topper's Pizza Giveaway "Buy the Bacon
            Grilled Cheese Pizza for a chance to win 4 Toronto Maple Leafs
            Tickets. 1
          </h3>
        </div>
      </div>

      <div className=" max-w-4xl mx-auto style-p ">
        <h2 className="font-bold">
          Topper's Franchising Company Inc. <br /> Jan.16 - March 21, 2023
        </h2>

        <p>
          {" "}
          <strong> Agreement to Official Rules:</strong> By participating in the
          contest, the entrant fully and unconditionally agrees to and accepts
          these Rules, which are final and binding in all matters related to the
          contest. Whether an entrant receives a prize is contingent upon
          fulfilling all requirements set forth herein.{" "}
        </p>
        <p>
          <strong>Eligibility:</strong> This contest is open to all legal
          residents of Canada at least 18 years of age. Strategic Partners and
          Staff, Corporate Staff, and In-Store Employees of Topper's Pizza and
          their respective affiliates, subsidiaries, advertising and promotion
          agencies, and their immediate family members and/or those living in
          the same household of each are not eligible to enter the contest.
          Topper's Pizza reserves the right to disqualify any Entrant in its
          sole discretion for any reason, including without limitation if
          Topper's Pizza determines Entrant is cheating, hacking, harassing,
          using abusive or offensive language, account sharing, sabotaging,
          spamming, engaging in social engineering, scamming, or violating the
          Topper's Pizza Rules & Regulations.
        </p>
        <p>
          <strong>Contest Entry:</strong> All Participants who enter the contest
          by completing the Topper's Rewards signup form online at
          https://www.topperscontest.ca will be entered in a draw, and Winner
          will be randomly selected. The Winner will win FOUR (4) Toronto Maple
          Leaf Tickets (the game day is Saturday, April 8th, vs. the Montreal
          Canadiens.) No purchase is required for entry. Limit of one prize per
          household (Valid photo identification must be provided to show
          household address). Phoned-in or walk-in entrants do not qualify.
        </p>
        <p>
          <strong>Contest Period:</strong> The contest period is from Monday,
          January 16, 2023 at 12:00 p.m. EST to Tuesday, March 21, 2023 at 11:00
          p.m. EST.
        </p>
        <p>
          <strong>Prizes:</strong> There is ONE (1) Grand Prize of "4 Toronto
          Maple Leafs Tickets” to be won. The prize consists of 4 Toronto Maple
          Leafs Tickets (the game day is Saturday, April 8th, vs. the Montreal
          Canadiens.) Approximate retail value of the Prize is $1,400. The prize
          has no cash value. No substitution or transfer of the Prize by the
          winner is permitted. The prize must be accepted as awarded.
        </p>
        <p>
          <strong>Odds of Winning:</strong>The odds of winning the contest are
          dependent upon the total number of eligible entries received for the
          contest period.
        </p>
        <p>
          <strong>Prize Draws:</strong> A random draw will be held on Thursday,
          March 23, 2023, to select the Grand Prize winner; the winner will be
          entitled to ONE (1) Grand Prize of "4 Toronto Maple Leafs Tickets”.
          Topper's Pizza will make three (3) attempts to contact the potential
          winner via email or Direct Message within 10 days from the time the
          winner is selected. If unable to reach a potential winner via email
          within this 10-day period, the winner will be disqualified, and an
          alternate winner will be selected. The Winner will be provided with a
          certified letter confirming the Prize.
        </p>
        <p>
          <strong>Waiver:</strong> Upon acceptance of the prize, Winner agrees
          to have their name, photo or video published on the Topper's Pizza
          website, Topper's Pizza Canada Facebook and/or any other Topper's
          Pizza promotional materials as part of future promotions.
        </p>
      </div>
    </section>
  );
}
