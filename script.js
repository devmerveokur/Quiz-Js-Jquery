$(document).ready(function() {
    let correctAnswers = 0;

    $('.check-answer').click(function() {
        const questionNumber = $(this).data('question');
        const correctAnswer = $(this).data('answer');
        const userAnswer = $(`#answer${questionNumber}`).val().trim();
        const resultText = $(`#result${questionNumber}`);

        
        if ($.isNumeric(correctAnswer)) {
            
            if (parseInt(userAnswer) === parseInt(correctAnswer)) {
                resultText.text(`Tebrikler! Doğru cevap: ${correctAnswer}`);
                resultText.removeClass('incorrect').addClass('correct');
                correctAnswers++;
               
                $(this).prop('disabled', true);
                $(`#answer${questionNumber}`).prop('disabled', true);
            } else {
                resultText.text("Yanlış cevap, tekrar deneyin.");
                resultText.removeClass('correct').addClass('incorrect');
            }
        } else {
            
            if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                resultText.text(`Tebrikler! Doğru cevap: ${correctAnswer}`);
                resultText.removeClass('incorrect').addClass('correct');
                correctAnswers++;
                
                $(this).prop('disabled', true);
                $(`#answer${questionNumber}`).prop('disabled', true);
            } else {
                resultText.text("Yanlış cevap, tekrar dene.");
                resultText.removeClass('correct').addClass('incorrect');
            }
        }
    });

    $('#check-all').click(function() {
        if (correctAnswers === 3) {
            $('#flag').fadeIn();
        } else {
            alert("Tüm sorulara doğru cevap vermeniz gerekiyor!");
        }
    });
});
