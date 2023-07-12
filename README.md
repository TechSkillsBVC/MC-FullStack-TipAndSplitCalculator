# MC-FullStack-TipAndSplitCalculator
Tip &amp; Split Calculator application activity

Fix the following problems with this feature:

1. When using the “Select a split” slider, the number of people selected is displayed (e.g. “4 people"). However, when one person is selected it displays “1 People” which is bad grammar. Fix the display to say “Person” if 1 is selected, and “People” if any other value is selected.
2. The “Tip” amount is not calculating correctly when multiple people are selected. For example, if the bill total is $100, the tip is 10%, and the split is 2 people, then the “Tip” amount should be 5.00 (per person). However, it displays 10.00. Fix this bug.
3. The UX (user experience) department has reviewed this feature and requested a small change to the slider. They’ve looked at the code and see that the transparency of the slider is set to 50%. They request that when the slider is being actively used, it should NOT be transparent. In other words, when the user is adjusting the slider, it should display its full color. When its not being adjusted, it should be partly transparent.  
