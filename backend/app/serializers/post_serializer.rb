class PostSerializer < ActiveModel::Serializer
  
  attributes :id, :title, :content, :image
 
  def image
    if object.image.attached?
      {
        url: object.image.url
      }
    end
  end
end
