class Api::CreaturesController < ApplicationController
    def index
        @creatures = Creature.all

        render json: @creatures
    end

    def create 
        @creature = Creature.new(creature_params)

        if @creature.save
            render json: @creature
        end
    end

    # get the creature id from the url params
    def show 
    creature_id = params[:id]
    
        # use `creature_id` to find the creature in the database
        # and save it to an instance variable
        @creature = Creature.find_by_id(creature_id)
    
        render json: @creature
    end

    def update
        creature_id = params[:id]

        @creature = Creature.find_by_id(creature_id)
        @creature.update_attributes(creature_params)

        render json: @creature
        
    end

    def destroy
        creature_id = params[:id]
        @creature = Creature.find_by_id(creature_id)
        @creature.destroy

        render json: {
            msg: "Successfully deleted"
        }

    end

    private

    #Whitelist params 
    def creature_params
        params.require(:creature).permit(:name, :description)
    end
end
