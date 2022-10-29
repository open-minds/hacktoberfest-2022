

defmodule Helpers do

  def printMain(nb_tries) do
    main_message = "> Hi ! Guess the number between 1 and 100 in #{nb_tries} tries !"
    "#{main_message}" |> IO.puts
  end

  def printRightGuess(nb_tries, number) do
    message = "> Congratulation ! You guessed the right number #{number} with #{nb_tries} tries left !"
    "#{message}" |> IO.puts
  end

  def printWrongGuess(nb_tries) do
    message = "> Too bad ! You have #{nb_tries-1} tries left !"
    "#{message}" |> IO.puts
  end

  def printHigher() do
    message = "> You are looking for a Higher number"
    "#{message}" |> IO.puts
  end

  def printLower() do
    message = "> You are looking for a Lower number"
    "#{message}" |> IO.puts
  end

  def printGameOver() do
    message = "> Oh noo ! You have no more tries left !\n"
    "#{message}" |> IO.puts
  end

  def requestValue() do
    {value, _} = IO.gets("\tInsert a value: ") |> Integer.parse
    value
  end
end


defmodule Looper do
  def guess(number, tries_left) do
    # Tries cases
    case tries_left do

      # When there is no more tries
      0 ->
        Helpers.printGameOver()
        :ok

      # When you still have tries left
      x ->
        # Request a value
        guessed = Helpers.requestValue()
        IEx.Helpers.clear

        if guessed == number do
          # If you guessed the number,  congrate and exit the game
          Helpers.printRightGuess(x, guessed)
          :ok
        else
          # If you didn't guess the number retry within the number of tries left
          if x>1 do
            Helpers.printWrongGuess(x)
            if guessed < number do
              Helpers.printHigher()
            end

            if guessed > number do
              Helpers.printLower()
            end
          end
          guess(number, x - 1)
        end


    end
  end
end



tries = 7
guss_number = :rand.uniform(100)

IEx.Helpers.clear
Helpers.printMain(tries)

# Start the game
Looper.guess(guss_number, tries)
