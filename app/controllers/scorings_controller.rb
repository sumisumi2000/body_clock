class ScoringsController < ApplicationController
  def new; end
  def show
    @compliment = calc_score(params[:time].to_f)
  end

  private

  # スコアを計算
  def calc_score(time)
    diff = (Result::SETTING_TIME - time).abs
    case diff
    when 0
      "Phenomenal"
    when 0 .. 1
      "Brilliant"
    when 1 .. 10
      "Amazing"
    when 11 .. 20
      "Outstanding"
    when 21 .. 30
      "Fantastic"
    when 31 .. 40
      "Excellent"
    when 41 .. 50
      "Great"
    when 51 .. 60
      "Well done"
    when 61 .. 70
      "Good"
    else
      "Nice"
    end
  end
end
