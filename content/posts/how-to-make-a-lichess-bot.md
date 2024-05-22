---
title: How to Make a Lichess Bot in Python
thumbnail: https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
description: Chess is one of the most popular strategic games played all around the world. Chess bots now dominate even the highest level grand-masters so how do we make one?.
date: Feb 2024
time: 14 mins
---

**Chess** is one of the most popular strategic games played all around the world. Chess bots now **dominate even the highest level grand-masters** so how do we make one?

To get started all you’ll need is **Python3.9** and Github installed!

### Outline

**Lichess Communication:**

Setting up a **communication** to **lichess** using **lichess-bot**.

**Chess Bot:**

Building a **minimax** chess engine using **position and material eval**.

**Hosting:**

Using [**https://railway.app/**](https://railway.app/) to host your chess bot.

### Lichess Communication

#### Cloning

To start off we’re going to set up a **brand new VSCode project**!

![](https://cdn-images-1.medium.com/max/800/1*xzuOunDDKeP1_vdDgowZhA.png)

We’re going to use lichess-bot to set up a live data stream to lichess so that we can play games withing their application.

**Clone** [**https://github.com/lichess-bot-devs/lichess-bot**](https://github.com/lichess-bot-devs/lichess-bot.git)**.git** into your **new project!** Make sure you have **github installed**!

```bash
git clone https://github.com/lichess-bot-devs/lichess-bot.git
```

![](https://cdn-images-1.medium.com/max/800/1*BtLg4LeA8dGhOMmt6DoCaw.png)

#### Virtual Env

Now we’re going to set up a consistent **virtual env** for python.

This will help with **maintaining consistency** and **managing dependencies** in our application.

```bash
cd lichess-bot
pip install virtualenv
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

![](https://cdn-images-1.medium.com/max/800/1*FJWUwBR4M26d851vK5FU0w.png)

**Once this is done, copy *config.yml.default* to *config.yml***

![](https://cdn-images-1.medium.com/max/800/1*3f7qnjxUpMBRLE5noKpcGg.png)

#### Lichess Bot Account

Once you’re finished, we’re going to set up a **lichess bot account**. Head over to [https://lichess.org/](https://lichess.org/) and **create a new account**. 

**It’s important that this account has not games played in order to become a bot account.**

Once you’ve create an account, go to **preferences -&gt; API access tokens** and create a key that looks like this.

![](https://cdn-images-1.medium.com/max/800/1*Ex8ELl-5cqyabhccz9Cc-A.png)

Now **put the following curl command into terminal** and **replace YOUR\_TOKEN** with the **token you get after creating**.

**Make sure to save this token into a save place too, because we’re going to be using it again!**

```bash
curl -d '' https://lichess.org/api/bot/account/upgrade -H "Authorization: Bearer YOUR_TOKEN"
```

![](https://cdn-images-1.medium.com/max/800/1*-D-d1nvEvFBBYQJ0WvijKA.png)

Head back to lichess and you should now have a **bot account**!!

![](https://cdn-images-1.medium.com/max/800/1*Q0cVY2acnZcHgMq43LqaiA.png)

Now that you have a bot account, add your **key** we created earlier (you can create a new one with bot scope too) into the **lichess config.yml file**. Replace **xxxxxxxxxx** with your **key:**

![](https://cdn-images-1.medium.com/max/800/1*c9WnR-pSY0bCqlcf2fWKUQ.png)

#### Playing against it

Now that you have your bot all set up, it’s time to try it out.

**In config.yml**, switch name to **“RandomMove”** and protocol to **“homemade”.**

![](https://cdn-images-1.medium.com/max/800/1*e98pQRntLW6mbRb0K_M5Ag.png)

We want to be able to play most games against our bot so **uncomment correspondance** and **switch 14 days to .inf**.

![](https://cdn-images-1.medium.com/max/800/1*RFx4xYwAyica3sP8f_NgYw.png)

Then run inside of your **terminal**:

```bash
python3 lichess-bot.py
```

![](https://cdn-images-1.medium.com/max/800/1*VcEnvwfxxTu04-rb-LIZyQ.png)

You’re now **connected to lichess** and **ready to start playing** some games against your bot!!

**Note: You’ll need to switch your lichess account to play against your bot.**

![](https://cdn-images-1.medium.com/max/800/1*Lys-JbWvZmOBijHg5qNQjg.png)

But right now you’re bot plays random moves, let’s make it **STRONG now**.

![](https://cdn-images-1.medium.com/max/800/0*jX5kOkDcX8zzAy-U.gif)

### Building the AI

#### How it’s going to work

To build the AI, we’re going to be using a **minimax search** with **position and material eval**, pretty simple but strong. 

Minimax will basically search through **millions of possible positions** from the current board, **evaluate them** and then give us which one is **best**. Think of it as a **massive tree**.

![](https://cdn-images-1.medium.com/max/800/0*1V_j-aUxI28cMPtx.jpeg)

Evaluation is how we’re going to **determine whether this position** of millions of others is **better than the others**.

Position eval takes **every piece** in that position, **finds what square** it’s on and then gives it a **point rating**.

![](https://cdn-images-1.medium.com/max/800/0*9Vl-9xQJtjWEIe6N.png)

Each of these numbers are a **spot on the board** and how much the **piece is worth** on that square.

Then we **add this value** to their **material eval:**

![](https://cdn-images-1.medium.com/max/800/1*E_0phHGh3NsHRLopAmmcHQ.png)

You’ll notice I usually give the bishop 330, just to **differentiate it** from the **knight** and because they’re usually **stronger later into the endgame**.

And this is how we’re going to evaluate our positions.

#### Let’s get programming

Create a **new folder** inside of **/engines** called ***bot*.** Inside of this folder, create a file called ***main.py.***

![](https://cdn-images-1.medium.com/max/800/1*saiAKeifm1r9da545MvshA.png)

#### Position Evaluation

Create a **new file** inside of **/bot** called **positions.py.** Inside of the file, put all the positions eval for each piece:

```python
# Pawn
pawn = [
    0, 0, 0, 0, 0, 0, 0, 0,
    5, 10, 10, -20, -20, 10, 10, 5,
    5, -5, -10, 0, 0, -10, -5, 5,
    0, 0, 0, 20, 20, 0, 0, 0,
    5, 5, 10, 25, 25, 10, 5, 5,
    10, 10, 20, 30, 30, 20, 10, 10,
    50, 50, 50, 50, 50, 50, 50, 50,
    0, 0, 0, 0, 0, 0, 0, 0]


# Knight
knight = [
    -50, -40, -30, -30, -30, -30, -40, -50,
    -40, -20, 0, 5, 5, 0, -20, -40,
    -30, 5, 10, 15, 15, 10, 5, -30,
    -30, 0, 15, 20, 20, 15, 0, -30,
    -30, 5, 15, 20, 20, 15, 5, -30,
    -30, 0, 10, 15, 15, 10, 0, -30,
    -40, -20, 0, 0, 0, 0, -20, -40,
    -50, -40, -30, -30, -30, -30, -40, -50]


# Bishop
bishop = [
    -20, -10, -10, -10, -10, -10, -10, -20,
    -10, 5, 0, 0, 0, 0, 5, -10,
    -10, 10, 10, 10, 10, 10, 10, -10,
    -10, 0, 10, 10, 10, 10, 0, -10,
    -10, 5, 5, 10, 10, 5, 5, -10,
    -10, 0, 5, 10, 10, 5, 0, -10,
    -10, 0, 0, 0, 0, 0, 0, -10,
    -20, -10, -10, -10, -10, -10, -10, -20]


# Rook
rook = [
    0, 0, 0, 5, 5, 0, 0, 0,
    -5, 0, 0, 0, 0, 0, 0, -5,
    -5, 0, 0, 0, 0, 0, 0, -5,
    -5, 0, 0, 0, 0, 0, 0, -5,
    -5, 0, 0, 0, 0, 0, 0, -5,
    -5, 0, 0, 0, 0, 0, 0, -5,
    5, 10, 10, 10, 10, 10, 10, 5,
    0, 0, 0, 0, 0, 0, 0, 0]


# Queen
queen = [
    -20, -10, -10, -5, -5, -10, -10, -20,
    -10, 0, 0, 0, 0, 0, 0, -10,
    -10, 5, 5, 5, 5, 5, 0, -10,
    0, 0, 5, 5, 5, 5, 0, -5,
    -5, 0, 5, 5, 5, 5, 0, -5,
    -10, 0, 5, 5, 5, 5, 0, -10,
    -10, 0, 0, 0, 0, 0, 0, -10,
    -20, -10, -10, -5, -5, -10, -10, -20]


# King
king = [
    20, 30, -5, 0, -5, -5, 30, 20,
    20, 20, -5, -5, -5, -5, 20, 20,
    -10, -20, -20, -20, -20, -20, -20, -10,
    -20, -30, -30, -40, -40, -30, -30, -20,
    -30, -40, -40, -50, -50, -40, -40, -30,
    -30, -40, -40, -50, -50, -40, -40, -30,
    -30, -40, -40, -50, -50, -40, -40, -30,
    -30, -40, -40, -50, -50, -40, -40, -30]
```

If you want your bot to play a specific way, you can alter these values but these will give you a generally good bot.

#### **Material** Evaluation

Now we’re going to give each of our pieces a value.

Create a **new file** called **material.py** inside of **bot**. Pieces are going to get the following values:

- Pawn: 100
- Knights: 310
- Bishops: 330
- Rook: 500
- Queen: 900


Inside of **material.py**, add the following code:

```python
import chess

def get_material(board):
    # Weights
    pw = 100
    kw = 310
    bw = 330
    rw = 500
    qw = 900
    kingw = 20000

    wp = len(board.pieces(chess.PAWN, chess.WHITE))
    wr = len(board.pieces(chess.ROOK, chess.WHITE))
    wk = len(board.pieces(chess.KNIGHT, chess.WHITE))
    wb = len(board.pieces(chess.BISHOP, chess.WHITE))
    wq = len(board.pieces(chess.QUEEN, chess.WHITE))
    wking = len(board.pieces(chess.KING, chess.WHITE))

    bp = len(board.pieces(chess.PAWN, chess.BLACK))
    br = len(board.pieces(chess.ROOK, chess.BLACK))
    bk = len(board.pieces(chess.KNIGHT, chess.BLACK))
    bb = len(board.pieces(chess.BISHOP, chess.BLACK))
    bq = len(board.pieces(chess.QUEEN, chess.BLACK))
    bking = len(board.pieces(chess.KING, chess.BLACK))

    # White
    wpw = wp * pw
    # Rook weight increases for less pawns
    wrw = wr * rw
    # Knight weight goes down for each enemy pawn gone (8 pawns)
    wkw = wk * kw
    wbw = wb * bw
    wqw = wq * qw
    wkingw = wking * kingw

    # Black
    bpw = bp * pw
    # Rook weight increases for less pawns
    brw = br * rw
    # Knight weight goes down for each enemy pawn gone  (8 pawns)
    bkw = bk * kw
    bbw = bb * bw
    bqw = bq * qw
    bkingw = bking * kingw

    white_material = wpw + wrw + wkw + wbw + wqw + wkingw
    black_material = bpw + brw + bkw + bbw + bqw + bkingw

    total_material = white_material - black_material

    return total_material
```

First, we assign our **weights to our pieces**. Next we **grab all of those pieces** on the board. Finally we do we **calculations for the total piece eval** of each side and make the **material eval**.

#### The final eval function

Now using the **positions and the material eval**, we’re going to **calulcate the board evaluation.**

Create a **new file** called **evaluation.py**. Put the following code inside.

```python
from .material import get_material
import chess
from . import positions

def get_evaluation(board):

    # Check for checkmate of the opponent
    if board.is_checkmate():
        if board.turn:
            return -9999
        else:
            return 9999
    if board.is_stalemate():
            return 0
    if board.is_insufficient_material():
            return 0

    total_material = get_material(board)

    pawnsq = sum([positions.pawn[i] for i in board.pieces(chess.PAWN, chess.WHITE)])
    pawnsq = pawnsq + sum([-positions.pawn[chess.square_mirror(i)]
                        for i in board.pieces(chess.PAWN, chess.BLACK)])
    knightsq = sum([positions.knight[i] for i in board.pieces(chess.KNIGHT, chess.WHITE)])
    knightsq = knightsq + sum([-positions.knight[chess.square_mirror(i)]
                            for i in board.pieces(chess.KNIGHT, chess.BLACK)])
    bishopsq = sum([positions.bishop[i] for i in board.pieces(chess.BISHOP, chess.WHITE)])
    bishopsq = bishopsq + sum([-positions.bishop[chess.square_mirror(i)]
                            for i in board.pieces(chess.BISHOP, chess.BLACK)])
    rooksq = sum([positions.rook[i] for i in board.pieces(chess.ROOK, chess.WHITE)])
    rooksq = rooksq + sum([-positions.rook[chess.square_mirror(i)]
                        for i in board.pieces(chess.ROOK, chess.BLACK)])
    queensq = sum([positions.queen[i] for i in board.pieces(chess.QUEEN, chess.WHITE)])
    queensq = queensq + sum([-positions.queen[chess.square_mirror(i)]
                            for i in board.pieces(chess.QUEEN, chess.BLACK)])
    kingsq = sum([positions.king[i] for i in board.pieces(chess.KING, chess.WHITE)])
    kingsq = kingsq + sum([-positions.king[chess.square_mirror(i)]
                        for i in board.pieces(chess.KING, chess.BLACK)])

    eval = total_material + pawnsq + knightsq + rooksq + queensq + kingsq 

    return eval
```

Let’s break this function down:

1. If the board is a **stalemate return 0**, if it’s **checkmate**, return an impossibly **high eval**.
    
2. If it’s neither of these scenarios **calculate the position evals** and **add** the **material eval** to it.
    
3. Return the eval to be used
    

#### Openings

Bots sometimes struggle with **variety** and openings so I like to give it a bunch of openings to play. This **isn’t required** but I prefer to add it in.

**First download this dataset of 2700 openings**: [https://drive.google.com/file/d/1zDjc9O3QmqvVKfBZ1fQsjXJG6ThwUAYa/view?usp=sharing](https://drive.google.com/file/d/1zDjc9O3QmqvVKfBZ1fQsjXJG6ThwUAYa/view?usp=sharing)

Next, add it into your workspace in the **/bot** folder. Your workspace should look like this at this point: 

![](https://cdn-images-1.medium.com/max/800/1*aXtFWgcI_wqa0hKN2Zb6sg.png)

Create a **new file** inside **/bot** now called **opening.py.** Add the following code to it:

```python
import pandas as pd
import chess
import chess.pgn
import random
import os


def play_opening(board):
    next_opening_moves = [];

    # If we go first, we just play e4
    if board.turn == chess.WHITE and board.fullmove_number == 1:
        next_opening_moves.append("e2e4")

    new_board = chess.Board()

    # Get the current directory of game.py
    current_directory = os.path.dirname(os.path.abspath(__file__))

    # Define the file path relative to the current directory
    file_path = os.path.join(current_directory, 'openings.csv')

    # Get all of the SAN notations
    chess_openings = pd.read_csv(file_path)

    chess_openings = chess_openings["moves"].tolist()

    # Loop over each opening
    # If it "contains" the same board position as our current board
    # Return it's next move
    for opening in chess_openings:
        moves_in_openings = opening.split();

        for index, move in enumerate(moves_in_openings):
            try:
                new_board.push_san(move)

                if board == new_board:
                    next_move = board.parse_san(moves_in_openings[index + 1]).uci()
                    next_opening_moves.append(next_move)
            except:
                break;
            
        
        new_board.reset()


    # If there are no more opening moves, return None
    if not next_opening_moves:
        return None

    # If there is valid openings, randomly choose the next move of them
    random_opening_from_array = random.choice(next_opening_moves)

    return random_opening_from_array
```

First, if we’re **white**, it will **play e4** (My fav move yk). Next it will **read the CSV file** and if the opening is inside of here, it will **play the next move** in the sequence. If there’s **no more opening** **moves**, then it will allow our **evaluation function** to continue working.

#### Minimax function

Our minimax function is going to let us find the **next best move** in the future based off **millions of possible moves**.

![](https://cdn-images-1.medium.com/max/800/0*1V_j-aUxI28cMPtx.jpeg)

Create a **new file** called **minimax.py** and put the following code inside:

```python
from .eval import get_evaluation
import numpy as np

def minimax(board, depth, alpha, beta, maximizing_player):
  if depth == 0 or board.is_game_over():
    return get_evaluation(board)
  
  if maximizing_player:
    max_eval = -np.inf
    for move in board.legal_moves:
      board.push(move)
      eval = minimax(board, depth - 1, alpha, beta, False)
      board.pop()
      max_eval = max(max_eval, eval)
      alpha = max(alpha, eval)
      if beta <= alpha:
        break
    return max_eval
  else:
    min_eval = np.inf
    for move in board.legal_moves:
      board.push(move)
      eval = minimax(board, depth - 1, alpha, beta, True)
      board.pop()
      min_eval = min(min_eval, eval)
      beta = min(beta, eval)
      if beta <= alpha:
        break
    return min_eval
```

Basically this function will take in a **board depth** (how many moves to look in the future) and then will find **every single possible move** based off of this.

It will also use **alpha beta pruning** to **speed** it up and **optimise** it for only the **top tier moves**.

If you want to understand more about this, check out the chess **programming wiki**: [**https://www.chessprogramming.org/Minimax**](https://www.chessprogramming.org/Minimax)

#### Let’s get it playing!

**Navigate to /main.py** and add the following code:

```python
import chess
import numpy as np

from .opening import play_opening
from .minimax import minimax


def get_move(board, depth):
    opening_move = play_opening(board)

    if opening_move:
        print("PLAYING OPENING MOVE: ", opening_move)
        return opening_move

    top_move = None;

    # Opposite of our minimax
    if board.turn == chess.WHITE:
      top_eval = -np.inf
    else:
      top_eval = np.inf

    for move in board.legal_moves:
        board.push(move)

        # WHEN WE ARE BLACK, WE WANT TRUE AND TO GRAB THE SMALLEST VALUE
        eval = minimax(board, depth - 1, -np.inf, np.inf, board.turn)

        board.pop()

        if board.turn == chess.WHITE:
            if eval > top_eval:
                top_move = move
                top_eval = eval
        else:
            if eval < top_eval:
                top_move = move
                top_eval = eval

    print("CHOSEN MOVE: ", top_move, "WITH EVAL: ", top_eval)
    return top_move
```

First, if there’s an **opening**, we’re going to **play it**. If not, we’re **going to use our minimax function** to find the **best move**.

Next, navigate to **/lichess-bot/homemade.py.** We’re going to add our **engine** into this so we can **use it** with the **lichess api**.

At the **top** of this file, **import your engine** in:

```python
from engines.bot.main import get_move
```

![](https://cdn-images-1.medium.com/max/800/1*rALfBh6gvwylIF6VBxlv_A.png)

Now add your engine strategy into the file, **make sure you put this BELOW the ExampleEngine class**:

```python
class PyBot(ExampleEngine):
    def search(self, board: chess.Board, time_limit: Limit, ponder: bool, draw_offered: bool, root_moves: MOVE) -> PlayResult:
        print("GETTING MOVE!")
        
        move = get_move(board, 4)

        return PlayResult(move, None)
```

Finally, switch the **engine name** inside of **config.yml** to **PyBot**.

![](https://cdn-images-1.medium.com/max/800/1*gfP8WrNXkHXbouNbXMlAYA.png)

**You can now play your bot**!! Run the server with (make sure you’re in the directory):

```bash
python3 lichess-bot.py
```

![](https://cdn-images-1.medium.com/max/800/1*teXVFXk-Cm7T23_Ycfz1hA.png)

Now go to [**https://lichess.org/*your-bot***](https://lichess.org/your-bot) and **challenge it to a game**!

![](https://cdn-images-1.medium.com/max/800/1*e_BYZJWTPy1oXMBfREVCAQ.png)

### Hosting

Now if you want to take this a **step farther**, you can **host it** so that you never have to have **the server run yourself**.

#### Docker

We’re going to be using a **custom dockerfile** in order to host everything. This will ensure **consistency** from our **dev env** to the **providers env**.

Inside of your **root directory**, create a file called **Dockerfile (with uppercase D)** and add the following instructions:

```bash
# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV NIXPACKS_PATH /opt/venv/bin:$NIXPACKS_PATH

# Set the working directory in the container
WORKDIR /app

# Install system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    build-essential \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy the current directory contents into the container at /app
COPY . /app/

# Create a virtual environment and set it as the Python environment
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Install Python dependencies
RUN pip install --upgrade pip \
    && pip install -r requirements.txt

# Command to run the application
CMD ["python", "lichess-bot.py"]
```

You’re project should now be looking like this:

![](https://cdn-images-1.medium.com/max/800/1*2gWqwsdUI_1TQxx-htVBqQ.png)

#### Github

We need to push our entire project to github so our hosting can connect to it and run it.

Navigate to [**https://github.com/**](https://github.com/) and create a new repository:

![](https://cdn-images-1.medium.com/max/800/1*M2KZ6oShRhcaCKGu_uKY0w.png)

Next go back to your code and **tap the .gitignore**. **Remove** the following lines:

```bash
*.yml
/engines/*
```

Now let’s update the **requirements.txt** to make sure they get added when we build the **Dockerfile**. **Add these** to it:

```bash
numpy==1.26.0
pandas==2.2.2
```

It should look something **like this** now:

![](https://cdn-images-1.medium.com/max/800/1*bxm3g35vQhk7pO9hSET8Vw.png)

Then run the following commands:

```bash
git reset -- lichess-bot
git add .
git commit -m "hosting"
git remote add origin https://github.com/username/repository.git - CHANGE THIS
git push --set-upstream origin master
```

This will **initialize** the repo, **remove the submodule**, **add the files** and then **push them** to Github.

![](https://cdn-images-1.medium.com/max/800/1*N9SDZ7baAeyTB-YAHrRUSg.png)

#### Let’s get hosting

Next let’s get **hosting**! Go to [**https://railway.app/**](https://railway.app/) and **create an account**. Now create a **new project** and select your **repo**:

![](https://cdn-images-1.medium.com/max/800/1*lSHlUBZfeWUdAjrLAQoRlQ.png)

Now check the build logs and make sure everything is good and **you’re chess bot should be done**!

![](https://cdn-images-1.medium.com/max/800/1*Bnwe7Di3viWr5CyqQmgH3w.png)

**Congratulation** on making you’re **first chess bot**!

![](https://cdn-images-1.medium.com/max/800/0*dOQfOLmFYJf-GA7i.gif)

### Next steps

Now if you want to **improve your chess bot**, you can head on over to the chess programming wiki [**https://www.chessprogramming.org/Main\_Page**](https://www.chessprogramming.org/Main_Page) and check out all the ways to improve the bot.

You can also go back through the **code** and make it **more efficient** so it’s **faster** and can have a **farther depth**.

### Conclusion

If you enjoyed this **detailed tutorial** and interested in more of my stuff, you can check out my website: [**https://kaipereira.com/**](https://kaipereira.com/) or my Github [**https://github.com/KaiPereira**](https://github.com/KaiPereira)