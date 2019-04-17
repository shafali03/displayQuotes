
//immediate invoked function expression

(function () {
    const quotes = [
        {
            quote:
                "Knock, And He will open the door Vanish, And He will make you shine like the sun Fall, And He will raise you to the heavens Become nothing, And He will turn you into everything",
            author: "Rumi"
        },
        {
            quote:
                "Knock, And He will open the door Vanish, And He will make you shine like the sun Fall, And He will raise you to the heavens Become nothing, And He will turn you into everything",
            author: "Rumi"
        },
        {
            quote:
                "Suffering is a gift. In it is hidden mercy.",
            author: "Rumi"
        },
        {
            quote:
                "Don’t grieve. Anything you lose comes round in another form",
            author: "Rumi"
        },
        {
            quote:
                "Words are a pretext. It is the inner bond that draws one person to another, not words.",
            author: "Rumi"
        },
        {
            quote:
                "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
            author: "Rumi"
        },
        {
            quote:
                "Goodbyes are only for those who love with their eyes. Because for those who love with heart and soul there is no such thing as separation",
            author: "Rumi"
        },
        {
            quote:
                "Start a huge, foolish project, like Noah…it makes absolutely no difference what people think of you.",
            author: "Rumi"
        },
        {
            quote:
                "These pains you feel are messengers. Listen to them.",
            author: "Rumi"
        },
        {
            quote:
                "Goodbyes are only for those who love with their eyes. Because for those who love with heart and soul there is no such thing as separation",
            author: "Rumi"
        },
        {
            quote:
                "Live life as if everything is rigged in your favor.",
            author: "Rumi"
        },
        {
            quote:
                "Sell your cleverness and buy bewilderment. Cleverness is mere opinion. Bewilderment brings intuitive knowledge",
            author: "Rumi"
        },
        {
            quote:
                "The very center of your heart is where life begins – the most beautiful place on earth",
            author: "Rumi"
        },
        {
            quote:
                "It’s your road, and yours alone, others may walk it with you, but no one can walk it for you.",
            author: "Rumi"
        },
        {
            quote:
                "Why do you stay in prison when the door is so wide open",
            author: "Rumi"
        },

    ]

    const btn = document.getElementById('generate-btn');

    btn.addEventListener('click', function () {

        let random = Math.floor(Math.random() * quotes.length);
        // console.log(random);

        document.getElementById('quote').textContent = quotes[random].quote;
        document.querySelector('.author').textContent = quotes[random].author;


    });

})();