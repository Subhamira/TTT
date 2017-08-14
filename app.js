$(function() {
	myApp = (function() {
		var game = new tictactoe.Game()
		$('.box').click(function() {
			$this = $(this);
			//$this.html(game.player_turn);
			game.place($this.data('x'), $this.data('y'))
			$this.html(game.board.getBoard()[$this.data('x')][$this.data('y')])
			//game.getWinner()

			if (game.getWinner()) {
				alert(game.getWinner() + " is winner")
			} else if (game.turn_count == 9 && game.getWinner() === null) {
				alert("It's a tie")
			}

		})
	})()

		$('#message').click(function reset() {
			window.location.reload();
			var BOARD = new tictactoe.Board()
			var game = new tictactoe.Game()
			game.turn_count=0
			var array = [].concat(...game.getBoard())
			console.log(game.getBoard())
			var obj = {
				tic_tac_toe_game: {
					data: {
						board: array
					}
				}
			}
			$.post("http://ce-sample-api.herokuapp.com/tic_tac_toe_games/4.json", obj, function(res) {
				//console.log(res)
			})
		})


})
