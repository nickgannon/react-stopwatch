function Stopwatch() {

    window.onload = function(){
        var seconds = 0;
        var milliSeconds = 0;
        var OutputSeconds = document.getElementById("seconds");
        var OutputMilliSeconds = document.getElementById("milliSeconds");
        var buttonStart = document.getElementById("start");
        var buttonStop = document.getElementById("stop");
        var buttonReset = document.getElementById("reset");
        var Interval;
    
        buttonStart.addEventListener('click', () => {
            clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
        });
    
        buttonStop.addEventListener('click', () => {
            clearInterval(Interval);
        });
    
        buttonReset.addEventListener('click', () => {
            clearInterval(Interval);
            milliSeconds = "00";
            seconds = "00";
            OutputSeconds.innerHTML = seconds;
            OutputMilliSeconds.innerHTML = milliSeconds;
        });
    
        function startTimer(){
            milliSeconds++;
            if(milliSeconds <= 9){
                OutputMilliSeconds.innerHTML = "0" + milliSeconds;
            }
    
            if(milliSeconds > 9){
                OutputMilliSeconds.innerHTML = milliSeconds;
            }
    
            if(milliSeconds > 99){
                seconds++;
                OutputSeconds.innerHTML = "0" + seconds;
                milliSeconds = 0;
                OutputMilliSeconds.innerHTML = "0" + 0;
            }
    
            if(seconds > 9){
                OutputSeconds.innerHTML = seconds;
            }
        }
    }

    return(
        <div>
            <div className="content">
                <div className="time" id="activeTime">
                    <span className="seconds" id="seconds">00</span>:<span className="milliSeconds" id="milliSeconds">00</span>
                </div>
                <div className="startStop">
                    <button id="start">Start</button>
                    <button id="stop">Stop</button>
                </div>
                <button id="reset">Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;