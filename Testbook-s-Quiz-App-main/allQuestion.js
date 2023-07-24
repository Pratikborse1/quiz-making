// Total 4 categories and 10 questions in each category
const QUESTIONS = {
  probability: [
    {
      question:
        " An event in the probability that will never be happened is called as -",
      options: [
        "Unsure event",
        "Sure event",
        "Possible event",
        "Impossible event",
      ],
      answer: "Impossible event",
    },
    {
      question: "What will be the value of P(not E) if P(E) = 0.07?",
      options: ["0.93", "007", "93", "72"],
      answer: "0.93",
    },
    {
      question:
        "The probability of a leap year selected at random contain 53 Sunday is:",
      options: ["53/ 366", "1/7", "2/7", "53/365"],
      answer: "53/ 366",
    },
    {
      question:
        " The probability that it will rain tomorrow is 0.85. What is the probability that it will not rain tomorrow",
      options: ["0.25", "0.145", "3/20", "none of these"],
      answer: "3/20",
    },
    {
      question:
        "What is the probability that a number selected from the numbers (1, 2, 3,..........,15) is a multiple of 4?",
      options: ["1/5", "4/2", "2/8", "3/5"],
      answer: "1/5",
    },
    {
      question:
        " What will be the probability of getting odd numbers if a dice is thrown?",
      options: ["2/7", "5/9", "3/9", "7/2"],
      answer: "5/9",
    },
    {
      question: "What are the total outcomes when we throw three coins?",
      options: ["6", "7", "8", "9"],
      answer: "8",
    },
    {
      question: "The sum of the probability of an event and non event is :",
      options: ["1", "2", "10", "6"],
      answer: "1",
    },
    {
      question:
        "If three coins are tossed simultaneously, than the probability of getting at least two heads, is:",
      options: ["2/12", "5/12", "3/8", "5"],
      answer: "3/8",
    },
    {
      question:
        "What is the probability of getting a sum as 3 if a dice is thrown?",
      options: ["7/4", "3/2", "15/18", "1/18"],
      answer: "1/18",
    },
  ],
  //pipes and citerns
  "Pipes and Cisterns": [
    {
      question:
        "A water tank is two-fifth full.Pipe A can fill a tank in 10 minutes and pipe B can empty it in 6 minutes.If both the pipes are open,how long will it take to empty or fill the tank completely?",
      options: ["6 min.", "8 min.", "9 min.", "2 min."],
      answer: "6 min.",
    },
    {
      question:
        "Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?",
      options: [
        "10 min. 20 sec.",
        "11 min. 45 sec.",
        "14 min. 40 sec.",
        "12 min. 30 sec.",
      ],
      answer: "14 min. 40 sec.",
    },
    {
      question:
        "A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?",
      options: ["3 hrs 25 min", "3 hrs 35 min", "3 hrs 15 min", "3 hrs 45 min"],
      answer: "3 hrs 15 min",
    },
    {
      question:
        "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",
      options: ["15 mins", "6 mins", "17 mins", "12 mins"],
      answer: "12 mins",
    },
    {
      question:
        "A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in ?",
      options: ["20 hrs", "28 hours", "36 hours", "40 hrs"],
      answer: "20 hrs",
    },
    {
      question:
        "One fill pipe A is 3 times faster than second fill pipe B and takes 32 minutes less than the fill pipe B. When will the cistern be full if both pipes are opened together?",
      options: ["10 min", "12 min", "6 min", "8 min"],
      answer: "12 min",
    },
    {
      question:
        "Pipe A can fill a tank in 16 minutes and pipe B cam empty it in 24 minutes. If both the pipes are opened together after how many minutes should pipe B be closed, so that the tank is filled in 30 minutes?",
      options: ["12 mins", "15 mins", "25 mins", "30 mins"],
      answer: "12 mins",
    },
    {
      question:
        "three pipes A,B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The slNoer of hours taken by C alone to fill the tank is:",
      options: ["24 min", "16 min", "20 min", "21 min"],
      answer: "21 min",
    },
    {
      question:
        "One pipe can fill a tank  three times as fast as another pipe. If together the two pipes can fill the tank in 36 min, then the slower alone will be able to fill the tank in:",
      options: ["140 min", "144 min", "114 min", "44 min"],
      answer: "144 min",
    },
    {
      question:
        "Pipe K fills a tank in 30 minutes. Pipe L can fill the same tank 5 times as fast as pipe K. If both the pipes were kept open when the tank is empty, how much time will it take for the tank to overflow ?",
      options: ["7 minutes", "9 minutes", "12 minutes", "5 minutes"],
      answer: "5 minutes",
    },
  ],

  //problem on age
  "Problems On Age": [
    {
      question:
        "A father said his son ,'I was as old as you are at present at the time of your birth.'If the father age is 38 now, the son age 5 years back was :",
      options: ["14 years", "18 years", "10 years", "24 years"],
      answer: "14 years",
    },
    {
      question:
        "In 10 years, A will be twice as old as B was 10 years ago. If A is now 9 years older than B, the present age of B is :",
      options: ["37", "38", "39", "41"],
      answer: "39",
    },
    {
      question:
        "The total age of A and B is 12 years more than the total age of B and C. C is how many years younger than A ?",
      options: ["14", "12", "18", "22"],
      answer: "12",
    },
    {
      question:
        "Rajeev's age after 15 years will be 5 times his age 5 years back. What is the present age of rajeev?",
      options: ["10", "17", "21", "20"],
      answer: "10",
    },
    {
      question:
        "The sum of the present ages of a father and his son is 60 years. five years ago, father's age was four times the age of the son. so now the son's age will be:",
      options: ["69", "89", "70", "80"],
      answer: "70",
    },
    {
      question:
        "The ages of Krish and Vaibhav are in the proportion of 3:5. After 9 years, the proportion of their ages will be 3 : 4. Then the current age of Vaibhav is:",
      options: ["19", "27", "24", "15"],
      answer: "15",
    },
    {
      question:
        "A person's present age is two-fifth of the age of his mother. After 8 years, he will be one-half of the age of his mother. How old is the mother at present ?",
      options: ["25", "40", "29", "38"],
      answer: "40",
    },
    {
      question:
        "Eight years ago, Ajay's age was 4/3 times that of Vijay. Eight years hence, Ajay's age will be 6/5 times that of Vijay. What is the present age of Ajay ?",
      options: ["40", "28", "22", "39"],
      answer: "40",
    },
    {
      question:
        "The ages of X and Y are in the proportion of 6:5 and total of their ages is 44 years. The proportion of their ages after 8 years will be",
      options: ["2.9", "6.3", "6.9", "8.7"],
      answer: "8:7",
    },
    {
      question:
        "Raju got married 8years ago. His present age is 6/5 times his age at the time of his marriage  Raju's sister was 10years younger to him at the time of his marriage. The present age of Raju's sister is?",
      options: ["31", "35", "38", "48"],
      answer: "38",
    },
  ],
  //profit and loss
  "Profit And Loss": [
    {
      question:
        "If selling price is doubled, the profit triples. Find the profit percent ?",
      options: ["200%", "300%", "100%", "400%"],
      answer: "100%",
    },
    {
      question:
        "A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:",
      options: ["9%", "5%", "8%", "15%"],
      answer: "5%",
    },
    {
      question:
        "A shopkeeper cheats to the extent of 10% while buying and selling, by using false weights. His total gain is.",
      options: ["21%", "31%", "18%", "19%"],
      answer: "21%",
    },
    {
      question:
        "By selling 45 lemons for Rs 40, a man loses 20%. How many should he sell for Rs 24 to gain 20% in the transaction ?",
      options: ["16", "18", "14", "19"],
      answer: "18",
    },
    {
      question:
        "If the cost price of 12 pens is equal to the selling price of 8 pens, the gain percent is ?",
      options: ["12%", "15%", "50%", "16%"],
      answer: "50%",
    },
    {
      question:
        "If the cost price is 25% of selling price. Then what is the profit percent.",
      options: ["150%", "300%", "200%", "350%"],
      answer: "300%",
    },
    {
      question:
        "On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is ?",
      options: ["Rs. 60", "Rs. 55", "Rs. 65", "Rs. 55"],
      answer: "Rs. 60",
    },
    {
      question:
        "A Shopkeeper sells two articles at Rs.1000 each, making a profit of 20% on the first article and a loss of 20% on the second article. Find the net Profit or loss that he makes? ",
      options: ["9%", "5%", "8%", "4%"],
      answer: "4%",
    },
    {
      question:
        "What profit percent is made by selling an article at a certain price, if by selling at 2/3rd of that price, there would be a loss of 20% ?",
      options: ["20%", "24%", "28%", "29%"],
      answer: "20%",
    },
    {
      question:
        "A person incurs a loss of 5% be selling a watch for Rs. 1140. At what price should the watch be sold to earn 5% profit.",
      options: ["Rs.1360", "Rs.1260", "Rs.1280", "Rs.1160"],
      answer: "Rs.1260",
    },
  ],
};
