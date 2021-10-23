 function one()
  {
    speak1();
 }
 function two()
 {
   speak2();
}
function three()
{
  speak3();
}
 
function speak1()
 {
    var synth = window.speechSynthesis;
    speak_data_1 = "Why do we use social media. We use social media because. Social media is easily acessible and is designed to snatch the users attention. It has its good and bad effects, social media is used by people around the world."
    speak_data_2 = "The most commonly used social media is Facebook this is because it enables people to stay updated on what friends are doing, without having to create separate accounts for every website or app."
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
    var utterThis = new SpeechSynthesisUtterance(speak_data_2);
    synth.speak(utterThis);
 }
 function speak2()
 {
    var synth = window.speechSynthesis;
    speak_data_1 = "There are lots of ways social media can help us, it helped us stay connected with our friends and family even during covid. For some people it helps mental health, by helping them feel connected to others and reducing the feeling of isolation and loneliness."
    speak_data_2 = "Sometimes it can also help people by finding like minded people or people who have had the same experience as them.It helps us understand what is going on around us, gives us the latest news and help with career opportunities."
    speak_data_3 =  "If you do marketing on social media, it can also let you open your brand to new customers from around the world "
   speak_data_4 = "It allows us to join or promote important causes and  raise awareness on important issues."
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
    var utterThis = new SpeechSynthesisUtterance(speak_data_2 );
    synth.speak(utterThis);
    var utterThis = new SpeechSynthesisUtterance( speak_data_3);
    synth.speak(utterThis);
    var utterThis = new SpeechSynthesisUtterance( speak_data_4);
    synth.speak(utterThis);
 }
 function speak3()
 {
    var synth = window.speechSynthesis;
    speak_data_1 = "The bad effects of social media.Social media may be fun and easy to use but like all things it has its bad effects.Depression and Anxiety. Social media lets you see the carefully selected best parts of everyone else's lives, "
    speak_data_2 = "which you compare to the negatives in your own life. Comparing yourself to other people is a sure path to anxiety, and social media has only made this easier to do."
    speak_data_3 = "Cyberbullying. Everyone knows what bullying is and how much it can hurt the person being bullied. Now think about Cyberbullying on social media the bully can be anonimous so you don't know who the bully is."
    speak_data_4 = "Cyberbullying can make someone conscious about their appearence and minimise conversations with people and it can lead to anxiety and deppression!"
    speak_data_5 = "Fear of mising out.Fear of missing out of FOMO is a phenomenon that means you are constantly checking social media apps and websites to make sure you are involved in all conversations and talks that go around your work place or school."
    speak_data_6 = "This can lead to unhealthy sleep patterns and eyestrain."
    speak_data_7 = "Unrealistic Expectations.Many people on social media give you unrealistic expectations about their lifestyle.So can never know how something really is or how truthful a post on social media is."
    speak_data_8 = "Negative body image.All sorts of people worry about their body wether thier too thin or fat and social media only increases conciousness on body image by putting all the celebrities and people with perfect lifes first on thies social media apps page."
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
    var utterThis = new SpeechSynthesisUtterance(speak_data_2);
    synth.speak(utterThis);
    var utterThis = new SpeechSynthesisUtterance(speak_data_3);
    synth.speak(utterThis);
    var utterThis = new SpeechSynthesisUtterance(speak_data_4);
    synth.speak(utterThis);
    var utterThis = new SpeechSynthesisUtterance(speak_data_5);
    synth.speak(utterThis);
    var utterThis = new SpeechSynthesisUtterance(speak_data_6);
    synth.speak(utterThis);
    var utterThis = new SpeechSynthesisUtterance(speak_data_7);
    synth.speak(utterThis);
    var utterThis = new SpeechSynthesisUtterance(speak_data_8);
    synth.speak(utterThis);
 }