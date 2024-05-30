body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.wheel-container {
    text-align: center;
}

.wheel {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 5px solid #333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.segment {
    position: absolute;
    width: 50%;
    height: 50%;
    background-color: #ff0000;
    border: 1px solid #333;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
}

.segment:nth-child(2) {
    transform: rotate(180deg) translateX(100%);
    background-color: #00ff00;
}
